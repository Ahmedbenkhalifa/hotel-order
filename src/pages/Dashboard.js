import { CircularProgress, Container, Paper, Typography } from "@mui/material";
import React from "react";
import CommandItem from "../components/CommandItem";
import useCommand from "../hooks/useCommand";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Dashboard = () => {
  const [commands, isLoading, error] = useCommand();
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Typography variant="h5" sx={{ mb: 2 }} color="primary">
        List des commandes:
      </Typography>
      {error && (
        <Typography
          variant="h6"
          color="error"
          sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ErrorOutlineIcon sx={{ mr: 1 }} />
          Oups une erreur s'est produite.
        </Typography>
      )}
      {isLoading ? (
        <CircularProgress sx={{ display: "block", margin: "100px auto" }} />
      ) : (
        commands.map((command, key) => <CommandItem key={key} command={command} />)
      )}
      {!isLoading && commands.length === 0 && <EmptyItem />}
    </Container>
  );
};
const EmptyItem = () => {
  return (
    <Paper sx={{ p: 1, py: 3, backgroundColor: "#EEE", width: "100%" }}>
      <Typography align="center">Aucune commande trouvée</Typography>
    </Paper>
  );
};

export default Dashboard;
