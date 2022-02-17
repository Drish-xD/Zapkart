import {
  CircularProgress,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressFrom from "./AddressFrom";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";
import { commerce } from "../../lib/commerce";
import { Box } from "@mui/system";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkOutToken, setCheckOutToken] = useState(null);
  const [shippingData, setShippingData] = useState({
    firstname: "Test",
    lastname: "Test",
    address: "Test",
    city: "Test",
    country: "IN",
    email: "abc@xyz.com",
    phone: "9876543210",
    state: "DL",
    zip: "123456",
    cardno: "1234567890123456",
    expires: "1234",
    cvv: "123",
  });
  console.log(shippingData);

  const generateToken = async (cartId) => {
    try {
      const token = await commerce.checkout.generateToken(cartId, {
        type: "cart",
      });
      setCheckOutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateToken(cart.id);
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

  const Form = () =>
    activeStep === 0 ? (
      <AddressFrom
        checkOutToken={checkOutToken}
        next={nextStep}
        shippingData={shippingData}
      />
    ) : (
      <PaymentForm
        checkOutToken={checkOutToken}
        backStep={backStep}
        finalStep={finalStep}
        shippingData={shippingData}
      />
    );

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 2, mt: 10 }} elevation={3}>
        <Typography
          variant="h3"
          component="h3"
          marginBottom="20px"
          textAlign="center"
        >
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
        ) : !checkOutToken ? (
          <Box
            sx={{ display: "grid", placeItems: "center", minHeight: "400px" }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Form />
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
