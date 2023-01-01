import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <div>
    <h1>My Heading through variable</h1>
  </div>
);

const Title = () => (
  <div>
    <h1>My Heading through Component</h1>
  </div>
);

const HeadingComponent = () => {
  return (
    <div>
      {title}
      <Title />
      <h1>This is component heading</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
