import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import FormInput from "./CustomInputs/FormInput";
import { useForm, FormProvider } from "react-hook-form";

const PaymentForm = ({ checkOutToken, backStep, finalStep }) => {
  const methods = useForm();

  return (
    <>
      <Typography>Payment Details</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => finalStep(data))}>
          <Grid container spacing={3}>
            <FormInput name="cardno" label="Card Number" size={12} inputProps={{ pattern: "[0-9]{16}" }} />
            <FormInput name="expires" label="Expires" inputProps={{ pattern: "[0-9]{4}" }} />
            <FormInput name="cvv" label="CVC (CVV)" inputProps={{ pattern: "[0-9]{3,4}" }} />
          </Grid>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <Button onClick={() => backStep()} color="error" variant="outlined" disableElevation>
              Cancel
            </Button>
            <Button type="submit" color="success" variant="contained" disableElevation>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default PaymentForm;
