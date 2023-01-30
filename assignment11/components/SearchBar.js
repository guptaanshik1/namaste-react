import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";

export const SearchBar = ({
  restaurants,
  setRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [searchText, setSearchText] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { user, setUser } = useContext(UserContext);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };
  const handleInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSearch = (searchText, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  };
  const { name, email } = inputs;

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
      <input
        placeholder="Type name"
        name="name"
        onChange={(e) => handleInputs(e)}
      />
      <button
        className="search-btn"
        onClick={() => {
          setUser({
            ...user,
            name,
          });
        }}
      >
        Name
      </button>
      <input
        placeholder="Type email"
        name="email"
        onChange={(e) => handleInputs(e)}
      />
      <button
        className="search-btn"
        value={email}
        onClick={() => {
          setUser({
            ...user,
            email,
          });
        }}
      >
        Email
      </button>
    </div>
  );
};
