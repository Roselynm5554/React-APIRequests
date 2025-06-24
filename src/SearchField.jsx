import React, { useState, useEffect, useRef } from "react";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const lastSearch = useRef("");

  useEffect(() => {
    const delay = setTimeout(() => {
      const trimmed = searchTerm.trim();
      if (trimmed && trimmed !== lastSearch.current) {
        onSearch(trimmed);
        lastSearch.current = trimmed;
      }
    }, 500); 

    return () => clearTimeout(delay);
  }, [searchTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search for GIFs"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchField;