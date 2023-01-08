import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import { SearchBar } from "./SearchBar";

export const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div className="container">
      <SearchBar restaurants={restaurants} setRestaurants={setRestaurants} />
      <div className="cards-container">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </div>
  );
};
