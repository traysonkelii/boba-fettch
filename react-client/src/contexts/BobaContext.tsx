import React, { createContext, useContext, useState } from "react";
import { Office, SortOption } from "../types";

interface BobaContextType {
  selectedOffice: string;
  setSelectedOffice: (office: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  offices: Office[];
  setOffices: (offices: Office[]) => void;
}

const BobaContext = createContext<BobaContextType | undefined>(undefined);

export const BobaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedOffice, setSelectedOffice] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [offices, setOffices] = useState<Office[]>([]);

  return (
    <BobaContext.Provider
      value={{
        selectedOffice,
        setSelectedOffice,
        sortBy,
        setSortBy,
        offices,
        setOffices,
      }}
    >
      {children}
    </BobaContext.Provider>
  );
};

export const useBobaContext = () => {
  const context = useContext(BobaContext);
  if (context === undefined) {
    throw new Error("useBobaContext must be used within a BobaProvider");
  }
  return context;
};
