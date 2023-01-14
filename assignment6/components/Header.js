import ToggleLog from "./toggleLog";

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
  return (
    <div className="header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Sign in</li>
        <li>Cart</li>
      </ul>
      <ToggleLog />
    </div>
  );
};
