import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  InputBase,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import LockIcon from "../assets/images/LockIcon";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const signIn = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/hotel/login", { password });
      setIsLoading(false);
      setError(false);
      navigate('/dashboard')
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };
  const handleChange = (event) => {
    setPassword(event.target.value);
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signIn();
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LockIcon />
      <Typography component="h1" variant="h3" align="center" sx={{ mt: 2 }}>
        This content is protected.
      </Typography>
      <Typography component="h1" variant="h6" align="center" sx={{ color: "GrayText" }}>
        To continue, please enter the password.
      </Typography>
      <Paper
        elevation={10}
        sx={{
          mt: 2,
          width: "350px",
          maxHeight: "44px",
          borderRadius: "15px",
        }}
      >
        <Box
          component="form"
          sx={{
            borderRadius: "15px",
            display: "flex",
            overflow: "hidden",
          }}
          onSubmit={handleSubmit}
        >
          <InputBase
            type="password"
            sx={{ ml: 2, flex: 1 }}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <Button type="submit" sx={{ p: "10px", color: "GrayText" }} aria-label="search">
            {isLoading ? <CircularProgress size={25} /> : <ArrowRightAltIcon />}
          </Button>
        </Box>
      </Paper>
      {error && (
        <Typography color="error" sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <ErrorOutlineIcon sx={{ mr: 1 }} />
          Password Incorrect
        </Typography>
      )}
    </Container>
  );
};

export default Login;
