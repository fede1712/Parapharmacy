"use client";

import { useState } from "react";

export const Search = ({ brands, filteredBrands }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  filteredBrands = brands.filter((brand) => brand.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <input
      type="text"
      placeholder="Buscar marca..."
      value={searchTerm}
      onChange={handleInputChange}
      className="w-full p-2 mb-4 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
    />
  );
};
