//components
import Navbar from "./Navbar";
//assets
import Logo from "../images/logo.svg";
import classes from "./header.module.css";

const Header = ({ menu }) => {
  return (
    <header className={classes.header}>
      <a href="/">
        <img src={Logo} alt="snap" className="logo" />
      </a>
      <Navbar menu={menu} />
    </header>
  );
};

export default Header;

Header.displayName = "Header";
