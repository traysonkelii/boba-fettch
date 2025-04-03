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
import { BobaShop } from "./types";

const queryClient = new QueryClient();

const AppContent = () => {
  const { setOffices, setSelectedOffice, selectedOffice, sortBy } =
    useBobaContext();
  const [offset, setOffset] = React.useState(0);
  const [allShops, setAllShops] = React.useState<BobaShop[]>([]);
  const { data, isLoading, isFetching } = useBobaShops(offset);

  // Reset shops and offset when sort or office changes
  useEffect(() => {
    setAllShops([]);
    setOffset(0);
  }, [sortBy, selectedOffice]);

  // Append new shops when data changes
  useEffect(() => {
    if (data?.businesses) {
      setAllShops((prev) => [...prev, ...data.businesses]);
    }
  }, [data]);

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
        background: "linear-gradient(to bottom, #000000 0%, #1a1a1a 100%)",
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
              background: "linear-gradient(to right, #E50914, #FFD700)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="Boba-Fettch Logo"
              sx={{
                width: 300,
                height: 300,
                mb: 2,
                filter: "drop-shadow(0 0 10px rgba(255, 232, 31, 0.5))",
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontFamily: "'Star Jedi', 'Arial', sans-serif",
                color: "#E50914",
                textShadow:
                  "0 0 10px rgba(255, 232, 31, 0.5), 0 0 20px rgba(255, 232, 31, 0.3)",
                mb: 4,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                "@keyframes crawl": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.05)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                animation: "crawl 3s infinite",
              }}
            >
              Boba-Fettch
            </Typography>
          </Box>
          <Filters />

          <Grid container spacing={3}>
            {allShops.map((shop) => (
              <Grid size={4} key={shop.id}>
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
              <Button
                variant="contained"
                onClick={handleLoadMore}
                sx={{
                  bgcolor: "#E50914",
                  color: "#FFF",
                  "&:hover": {
                    bgcolor: "#FFD700",
                  },
                }}
              >
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
