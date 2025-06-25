import React, { useEffect, useState } from "react";
import GifCard from "./GifCard";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [apiGif, setApiGif] = useState([]);

 
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  
  useEffect(() => {
    if (!debouncedQuery) {
      setFilteredData([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${debouncedQuery}&api_key=acI4uhyGsewykSVBBLzhlbu35ITdN8W3`
        );
        const data = await response.json();
        setApiGif(data.data);
        setFilteredData(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="gif-search-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
    <div className="gif-grid">
      {filteredData.map((item) => (
        <GifCard
          key={item.id}
          src={item.images.fixed_height.url}
          title={item.title}
          username={item.user?.username}
          altText={item.alt_text}
        />
      ))}
    </div>
</div>
  );
};

export default SearchField;
