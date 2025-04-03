import React, { useEffect } from "react";
import "./App.css";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { BobaProvider, useBobaContext } from "./contexts/BobaContext";
import { Filters } from "./components/Filters";
import { useBobaShops } from "./hooks/useBobaShops";
import { fetchOffices } from "./services/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BobaShopCard } from "./components/BobaShopCard";

const queryClient = new QueryClient();

const AppContent = () => {
  const { setOffices, setSelectedOffice } = useBobaContext();
  const [offset, setOffset] = React.useState(0);
  const { data, isLoading, isFetching } = useBobaShops(offset);

  const handleLoadMore = () => {
    setOffset((prev) => prev + 20);
  };

  useEffect(() => {
    const loadOffices = async () => {
      const offices = await fetchOffices();
      setOffices(offices);
      if (offices.length > 0) {
        setSelectedOffice(offices[0].name);
      }
    };
    loadOffices();
  }, [setOffices, setSelectedOffice]);

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

          <Grid container spacing={3}>
            {data?.businesses.map((shop) => (
              <Grid size={4}>
                <BobaShopCard shop={shop} />
              </Grid>
            ))}
          </Grid>

          {(isLoading || isFetching) && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <CircularProgress sx={{ color: "#E50914" }} />
            </Box>
          )}

          {data?.total && data.total > offset + 20 && !isLoading && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <Button variant="contained" onClick={handleLoadMore}>
                Load More
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BobaProvider>
        <AppContent />
      </BobaProvider>
    </QueryClientProvider>
  );
}

export default App;
