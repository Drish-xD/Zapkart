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
import { useNavigate } from "react-router-dom";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, handleCaptureCheckout, error, setOrder }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [checkOutToken, setCheckOutToken] = useState(null);
  const [shippingData, setShippingData] = useState({
    firstname: "Ramu",
    lastname: "kaka",
    address: "123 Fake St",
    city: "New Delhi",
    country: "IN",
    email: "john.doe@example.com",
    phone: "7428730894",
    state: "DL",
    zip: "110001",
    cardno: "4242424242424242",
    expires: "1234",
    cvv: "123",
  });

  useEffect(() => {
    const generateToken = async (cartId) => {
      try {
        const token = await commerce.checkout.generateToken(cartId, {
          type: "cart",
        });
        setCheckOutToken(token);
      } catch (error) {
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    };
    generateToken(cart.id);
  }, [cart.id]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressFrom
        checkOutToken={checkOutToken}
        next={next}
        shippingData={shippingData}
      />
    ) : (
      <PaymentForm
        checkOutToken={checkOutToken}
        backStep={backStep}
        nextStep={nextStep}
        shippingData={shippingData}
        handleCaptureCheckout={handleCaptureCheckout}
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
          <Confirmation order={order} error={error} setOrder={setOrder} />
        ) : !checkOutToken ? (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              minHeight: "400px",
            }}
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
