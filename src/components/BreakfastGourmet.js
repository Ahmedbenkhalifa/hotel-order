import React from "react";
import { Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { orderDrinks, orderGourmet, orderJuice } from "../assets/constants/order";
import IncrementBox from "./IncrementBox";
import CheckOrder from "./CheckOrder";

const Breakfast_gourmet = () => {
  const { t } = useTranslation();
  return (
    <Grid item md={5.5} sx={{ diplay: "flex", flexDirection: "column" }}>
      <Typography
        color="primary"
        variant="h5"
        sx={{ mt: 2, fontWeight: "550", textTransform: "uppercase" }}
      >
        {t("breakfast_gourmet")}
      </Typography>
      <Typography sx={{ textTransform: "uppercase" }}>{t("breakfast_served_with")}</Typography>
      <Typography
        variant="h5"
        color="primary"
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
        {t("gourmet_selection")}
      </Typography>
      {orderGourmet.map((elem, key) => (
        <IncrementBox key={key} label={t(`${elem}`)} />
      ))}
      <CheckOrder label={t(`croissant_selection`)} />
    </Grid>
  );
};

export default Breakfast_gourmet;
