import React, { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchChange(query); // Gọi hàm từ prop
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Tìm bài nhạc hoặc nghệ sĩ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchBar;
