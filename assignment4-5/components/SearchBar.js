import { useState, useEffect } from "react";
import { restaurantList } from "../constants";

export const SearchBar = ({ restaurants, setRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setRestaurants(restaurantList);
  }, [searchText]);

  const handleSearch = (searchText, restaurants) => {
    setRestaurants(restaurants);
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setRestaurants(filteredRestaurants);
  };

  return (
    <div className="search-section">
      <input
        placeholder="Type dishes to search"
        value={searchText}
        onChange={(e) => handleInput(e)}
      />
      <button
        onClick={() => handleSearch(searchText, restaurants)}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
};
