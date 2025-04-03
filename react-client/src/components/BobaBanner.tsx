import { Box, Typography } from "@mui/material";

export const BobaBanner = ({ title }: { title: string }) => {
  return (
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
        {title}
      </Typography>
    </Box>
  );
};
