import { useQuery } from "@tanstack/react-query";
import { fetchBobaShops } from "../services/api";
import { useBobaContext } from "../contexts/BobaContext";

export const useBobaShops = (offset: number = 0) => {
  const { selectedOffice, sortBy } = useBobaContext();

  return useQuery({
    queryKey: ["bobaShops", selectedOffice, sortBy, offset],
    queryFn: () => fetchBobaShops(selectedOffice, sortBy, offset),
    enabled: !!selectedOffice,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
