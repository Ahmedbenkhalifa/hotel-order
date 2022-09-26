import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import orderContext from "../context/orderContext";
import resetContext from "../context/resetContext";

const IncrementBox = ({  label }) => {
  const { reset } = useContext(resetContext);
  const { order, setOrder } = useContext(orderContext);
  const [counter, setCounter] = useState(0);
  const [sum, setSum] = useState(0);
  const increment = () => {
    if (counter < 5) {
      setCounter(counter + 1);
      if (order.hasOwnProperty(label)) {
        setSum(order[label] + 1);
      } else {
        setSum(sum + 1);
      }
    }
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      if (order.hasOwnProperty(label)) {
        setSum(order[label] - 1);
      } else {
        setSum(sum - 1);
      }
    }
  };
  useEffect(() => {
    if (sum > 0) {
      setOrder({ ...order, [label]: sum });
    }
    if (sum == 0 && order.hasOwnProperty(label)) {
      if (delete order[label]) {
        setOrder({ ...order });
      }
    }
  }, [sum]);

  useEffect(() => {
    setSum(0);
    setCounter(0);
  }, [reset]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mr: 1,
          alignItems: "center",
          border: "1px solid rgba(127, 98, 56,0.7)",
          borderRadius: "10px",
          px: "7px",
          py: "3px",
        }}
      >
        <Box component="span" sx={{ cursor: "pointer", width: "10px" }} onClick={decrement}>
          -
        </Box>
        <Divider flexItem orientation="vertical" sx={{ color: "#5F255F", mx: 0.5 }} />
        <Box component="span" sx={{ width: "15px", textAlign: "center" }}>
          {counter}
        </Box>
        <Divider flexItem orientation="vertical" sx={{ color: "#5F255F", mx: 0.5 }} />
        <Box component="span" sx={{ cursor: "pointer", width: "10px" }} onClick={increment}>
          +
        </Box>
      </Box>
      <Typography>{label}</Typography>
    </Box>
  );
};

export default IncrementBox;
