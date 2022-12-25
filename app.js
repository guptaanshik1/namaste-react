const heading1 = React.createElement(
  "h1",
  {
    key: 1,
    id: "heading1",
    className: "heading1",
  },
  "Namaste React"
);
const heading2 = React.createElement(
  "h1",
  {
    key: 2,
    id: "heading2",
    className: "heading2",
  },
  "Namaste JavaScript"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement("div", {}, [heading1, heading2]);

root.render(root);
