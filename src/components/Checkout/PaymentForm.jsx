import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomInputs/FormInput";
import Review from "./Review";

const PaymentForm = ({
  checkOutToken,
  backStep,
  nextStep,
  shippingData,
  handleCaptureCheckout,
}) => {
  const methods = useForm({ defaultValues: shippingData });
  const handleSubmit = (data) => {
    const orderData = {
      line_items: checkOutToken.live.line_items,
      customer: {
        firstname: shippingData.firstname,
        lastname: shippingData.lastname,
        email: shippingData.email,
      },
      shipping: {
        name: `${shippingData.firstname} ${shippingData.lastname}`,
        street: shippingData.address,
        town_city: shippingData.city,
        county_state: shippingData.state,
        postal_zip_code: shippingData.zip,
        country: shippingData.country,
      },
      billing: {
        name: `${shippingData.firstname} ${shippingData.lastname}`,
        street: shippingData.address,
        town_city: shippingData.city,
        county_state: shippingData.state,
        postal_zip_code: shippingData.zip,
        country: shippingData.country,
      },
      fulfillment: {
        shipping_method: checkOutToken.shipping_methods[0].id,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: data.cardno,
          expiry_month: data.expires.slice(0, 2),
          expiry_year: data.expires.slice(2, 4),
          cvc: data.cvv,
          postal_zip_code: shippingData.zip,
        },
      },
    };
    handleCaptureCheckout(checkOutToken.id, orderData);
    nextStep();
  };

  return (
    <>
      <Review checkOutToken={checkOutToken} />
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => handleSubmit(data))}>
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
