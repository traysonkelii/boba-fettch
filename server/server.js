require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const NETFLIX_OFFICES = [
  {
    name: "Los Gatos",
    address: "121 Albright Wy, Los Gatos, CA 95032",
    coordinates: { latitude: 37.2567, longitude: -121.9607 },
  },
  {
    name: "New York",
    address: "888 Broadway, New York, NY 10003",
    coordinates: { latitude: 40.7336, longitude: -73.9906 },
  },
  {
    name: "Los Angeles",
    address: "5808 Sunset Blvd, Los Angeles, CA 90028",
    coordinates: { latitude: 34.0979, longitude: -118.3216 },
  },
];

app.get("/api/offices", (req, res) => {
  res.json(NETFLIX_OFFICES);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
