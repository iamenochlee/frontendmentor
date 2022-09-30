//components
import Navbar from "./Navbar";
//assets
import Logo from "../images/logo.svg";
import classes from "./header.module.css";

const Header = ({ menu }) => {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="snap" className="logo" />
      <Navbar menu={menu} />
    </header>
  );
};

export default Header;

Header.displayName = "Header";
