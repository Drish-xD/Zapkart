import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomInputs/FormInput";
import Review from "./Review";

const PaymentForm = ({ checkOutToken, backStep, finalStep, shippingData }) => {
  const methods = useForm({ defaultValues: shippingData });

  return (
    <>
      <Review checkOutToken={checkOutToken} />
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => finalStep(data))}>
          <Grid container spacing={3}>
            <FormInput
              name="cardno"
              label="Card Number"
              size={12}
              inputProps={{ pattern: "[0-9]{16}" }}
            />
            <FormInput
              name="expires"
              label="Expires(MMYY)"
              inputProps={{ pattern: "[0-9]{4}" }}
            />
            <FormInput
              name="cvv"
              label="CVC (CVV)"
              inputProps={{ pattern: "[0-9]{3,4}" }}
            />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <Button
              onClick={() => backStep()}
              color="error"
              variant="outlined"
              disableElevation
            >
              Back
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

export default PaymentForm;
