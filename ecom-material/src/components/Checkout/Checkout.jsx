import { Container, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressFrom from "./AddressFrom";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import { commerce } from "../../lib/commerce";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkOutToken, setCheckOutToken] = useState({});
  const [shippingData, setShippingData] = useState({});
  console.log(shippingData);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: "cart" });
        setCheckOutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart.id]);

  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const nextStep = (data) => {
    setShippingData(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const finalStep = (data) => {
    setShippingData({ ...shippingData, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2, mt: 10 }} elevation={3}>
        <Typography variant="h3" component="h3" marginBottom="20px" textAlign="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : activeStep === 0 ? (
          <AddressFrom checkOutToken={checkOutToken} next={nextStep} shippingData={shippingData} />
        ) : (
          <PaymentForm checkOutToken={checkOutToken} backStep={backStep} finalStep={finalStep} />
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
