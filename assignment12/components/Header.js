import ToggleLog from "./toggleLog";
import { Link } from "react-router-dom";
import useLoggedIn from "../utils/useLoggedIn";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

export const Header = () => {
  const isOnline = useLoggedIn();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  console.log("🚀 ~ file: Header.js:22 ~ Header ~ cartItems", cartItems);

  return (
    <div className="header">
      <Title />
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="links">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </li>
        <li>Sign in</li>
        <li>
          <Link to="/instamart" className="links">
            Instamart
          </Link>
        </li>
        <li>
          <Link to="/cart" className="links">
            {`Cart-${cartItems?.length}`}
          </Link>
        </li>
      </ul>
      {isOnline ? <span>🟢</span> : <span>🔴</span>}
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <ToggleLog />
    </div>
  );
};
