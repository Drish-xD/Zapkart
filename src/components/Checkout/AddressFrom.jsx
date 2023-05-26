import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormInput from "./CustomInputs/FormInput";
import FormSelector from "./CustomInputs/FormSelector";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";

const AddressFrom = ({ checkOutToken, next, shippingData }) => {
  const methods = useForm({ defaultValues: shippingData });

  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingStates, setShippingStates] = useState([]);

  const Countries = Object.entries(shippingCountries).map(([code, name]) => ({
    value: code,
    label: name,
  }));
  const States = Object.entries(shippingStates).map(([code, name]) => ({
    value: code,
    label: name,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setshippingCountries(countries);
  };

  const fetchShippingStates = async (checkoutTokenId, countryCode) => {
    const { subdivisions } =
      await commerce.services.localeListShippingSubdivisions(
        checkoutTokenId,
        countryCode
      );
    setShippingStates(subdivisions);
  };

  useEffect(() => {
    fetchShippingCountries(checkOutToken.id);
  }, [checkOutToken]);

  useEffect(() => {
    fetchShippingStates(checkOutToken.id, "IN");
  }, [checkOutToken]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next(data))}>
          <Grid container spacing={3}>
            <FormInput name="firstname" label="First Name" />
            <FormInput name="lastname" label="Last Name" />
            <FormInput
              name="email"
              label="Email"
              inputProps={{
                pattern:
                  "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?",
              }}
            />
            <FormInput
              name="phone"
              label="Phone No"
              inputProps={{ inputMode: "numeric", pattern: "[6-9][0-9]{9}" }}
            />
            <FormInput name="address" label="Address" size={12} />
            <FormInput name="city" label="City" />
            <FormInput
              name="zip"
              label="Zip / Postal Code"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]{6}" }}
            />

            <FormSelector name="state" label="State" options={States} />
            <FormSelector name="country" label="Country" options={Countries} />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <Button
              LinkComponent={Link}
              to="/cart"
              color="error"
              variant="outlined"
              disableElevation
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="success"
              variant="contained"
              disableElevation
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressFrom;
