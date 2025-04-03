import React from "react";
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useBobaContext } from "../contexts/BobaContext";
import { SortOption } from "../types";

export const Filters: React.FC = () => {
  const { selectedOffice, setSelectedOffice, sortBy, setSortBy, offices } =
    useBobaContext();

  return (
    <Grid container spacing={4} sx={{ mb: 4 }} justifyContent={"space-between"}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="office-select-label">Office Location</InputLabel>
          <Select
            labelId="office-select-label"
            value={selectedOffice}
            label="Office Location"
            onChange={(e) => setSelectedOffice(e.target.value)}
            sx={{
              bgcolor: "#1f1f1f",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E50914",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#B20710",
              },
            }}
          >
            {offices.map((office) => (
              <MenuItem key={office.name} value={office.name}>
                {office.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={2}>
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            sx={{
              bgcolor: "#1f1f1f",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#E50914",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#B20710",
              },
            }}
          >
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="distance">Distance</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
