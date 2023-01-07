import React from "react";
import ReactDOM from "react-dom";

const Headers = () => {
  return (
    <>
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
    </>
  );
};

const NestedHeader = () => {
  return (
    <div className="title">
      <Headers />
    </div>
  );
};

const SearchBar = () => {
  return (
    <>
      <input placeholder="Search here" className="search-bar" />
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div className="container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd_RDgXN37hFoF86MhiUuyHNV05zQI117-AbkdYXLYwR9qaTOwh1BxDY8W2qWYHRiJ8U&usqp=CAU"
        alt=""
      />
      <SearchBar />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt=""
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
