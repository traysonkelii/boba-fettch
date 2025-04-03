import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Chip,
  Button,
} from "@mui/material";
import { BobaShop } from "../types";

interface BobaShopCardProps {
  shop: BobaShop;
}

const metersToMiles = (meters: number): number => {
  return Math.round(meters * 0.000621371 * 10) / 10;
};

export const BobaShopCard: React.FC<BobaShopCardProps> = ({ shop }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#1f1f1f",
        "&:hover": {
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      {shop.image_url && (
        <CardMedia
          component="img"
          height="200"
          image={shop.image_url}
          alt={shop.name}
          sx={{ objectFit: "cover" }}
        />
      )}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {shop.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating value={shop.rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({shop.review_count} reviews)
            </Typography>
          </Box>
          <Chip
            label={`${metersToMiles(shop.distance)} miles`}
            size="small"
            sx={{ mb: 1, bgcolor: "#E50914", color: "white" }}
          />
          <Typography variant="body2" color="text.secondary" paragraph>
            {shop.location.address1}
            {shop.location.address2 && `, ${shop.location.address2}`}
            {shop.location.address3 && `, ${shop.location.address3}`}
            <br />
            {shop.location.city}, {shop.location.state} {shop.location.zip_code}
          </Typography>
          {shop.display_phone && (
            <Typography variant="body2" color="text.secondary" paragraph>
              {shop.display_phone}
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          href={shop.url}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#E50914",
            "&:hover": {
              bgcolor: "#B20710",
            },
          }}
        >
          View on Yelp
        </Button>
      </CardContent>
    </Card>
  );
};
