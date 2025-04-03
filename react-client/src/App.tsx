import React from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import { BobaProvider } from "./contexts/BobaContext";
import { Filters } from "./components/Filters";

const AppContent = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #141414 0%, #181818 100%)",
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            pt: 4,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "6px",
              background: "linear-gradient(to right, #E50914, #B20710)",
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              mb: 4,
            }}
          >
            Boba Fetch
          </Typography>
          <Filters />
        </Box>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <BobaProvider>
      <AppContent />
    </BobaProvider>
  );
}

export default App;
