import axios from "axios";
import { BobaShopsResponse, Office, SortOption } from "../types";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchOffices = async (): Promise<Office[]> => {
  const response = await axios.get(`${API_BASE_URL}/offices`);
  return response.data;
};

export const fetchBobaShops = async (
  location: string,
  sortBy: SortOption,
  offset: number = 0
): Promise<BobaShopsResponse> => {
  console.log(offset);
  const response = await axios.get(`${API_BASE_URL}/boba-shops`, {
    params: {
      location,
      sortBy,
      offset,
    },
  });
  return response.data;
};
