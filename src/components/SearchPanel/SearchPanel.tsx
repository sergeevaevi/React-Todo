import React, { useState } from "react";

const SearchPanel = ({ onSearchChange }: { onSearchChange: Function }) => {
  const [term, setTerm] = useState("");

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={term}
      onChange={handleTermChange}
    />
  );
};
export default SearchPanel;
