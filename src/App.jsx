import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import axios from "axios";
import "./style.css";
import GifCard from "./GifCard";
import SearchField from "./SearchField";
// const GIPHY_API_KEY = "YOUR_API_KEY";
const apiKey = 'XFrizQa5xUa0QyIdpW7DVlGPZTC2p9m3';
const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`


const App = () => {
  const [trending, setTrending] = useState([]);

  const fetchGif = async () => {
    try {
      const response = await axios.get(url);
      const gifData = response.data
      setTrending(gifData.data);
    } catch (err) {
      console.error("Error fetching gifs:", err);
    }
  };

  useEffect(() => {
    fetchGif();
  }, []);

  console.log(trending);

  return (
    <div className="gif-container">
      <h1 className="title">Welcome to Giphy!</h1>
      <div className="gif-input">
        <SearchField data={trending} />
      </div>
      <div className="gif-grid">
        {trending.map((gif) => (
          <GifCard
            key={gif.id}
            src={gif.images.fixed_height.url}
            title={gif.title}
            username={gif.user?.username}
            altText={gif.alt_text}
          />
        ))}
      </div>

    </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<App />);