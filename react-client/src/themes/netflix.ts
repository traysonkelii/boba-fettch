import { createTheme } from "@mui/material/styles";

export const netflixTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E50914", // Netflix red
      light: "#FF3D3D",
      dark: "#B20710",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#141414",
      paper: "#181818",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },
  typography: {
    fontFamily:
      '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
          borderRadius: "8px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          backgroundColor: "#E50914",
          "&:hover": {
            backgroundColor: "#FF3D3D",
          },
        },
        outlined: {
          borderColor: "#E50914",
          color: "#E50914",
          "&:hover": {
            borderColor: "#FF3D3D",
            color: "#FF3D3D",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#E50914",
          color: "#FFFFFF",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
        },
      },
    },
  },
});
