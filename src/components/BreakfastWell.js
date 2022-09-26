import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { orderDrinks, orderJuice, orderWellBeing } from "../assets/constants/order";
import IncrementBox from "./IncrementBox";

const Breakfast_well = () => {
  const { t } = useTranslation();
  return (
    <Grid item md={5.5} sx={{ diplay: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("breakfast_well_beining")}
      </Typography>
      <Typography sx={{ textTransform: "uppercase" }}>{t("breakfast_served_with")}</Typography>
      <Typography
        color="primary"
        variant="h5"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("drink")}
      </Typography>
      {orderDrinks.map((elem, key) => (
        <IncrementBox key={key} label={t(`${elem}`)} />
      ))}
      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("fruit_juice")}
      </Typography>
      {orderJuice.map((elem, key) => (
        <IncrementBox key={key} label={t(`${elem}`)} />
      ))}
      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("cheese")}
      </Typography>
      <IncrementBox label={t("comté_cheese")} />
      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("selection_well_being")}
      </Typography>
      {orderWellBeing.map((elem, key) => (
        <IncrementBox key={key} label={t(`${elem}`)} />
      ))}
    </Grid>
  );
};

export default Breakfast_well;
