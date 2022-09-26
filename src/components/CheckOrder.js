import React, { useContext, useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import orderContext from "../context/orderContext";
import resetContext from "../context/resetContext";

const CheckOrder = ({ label }) => {
  const { reset } = useContext(resetContext);
  const { order, setOrder } = useContext(orderContext);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setOrder({ ...order, [label]: 1 });
    } else {
      if (delete order[label]) {
        setOrder({ ...order });
      }
    }
  };

  useEffect(() => {
    setChecked(false);
  }, [reset]);

  return (
    <FormControlLabel
      label={label}
      control={<Checkbox color="secondary" checked={checked} onChange={handleChange} />}
    />
  );
};
export default CheckOrder;
