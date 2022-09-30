import React from "react";

//assets
import classes from "./header.module.css";
import iconMenu from "../images/icon-menu.svg";
import { useMediaQuery } from "react-responsive";
import iconCloseMenu from "../images/icon-close-menu.svg";

//components
import Dropdown from "./Dropdown";

const Navbar = ({ menu }) => {
  const [clickedMenu, setClickedMenu] = React.useState({});
  const [shown, setShown] = React.useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width: 45em)" });

  const handleClick = (index) => () => {
    setClickedMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleMenuClick = () => {
    setShown((prev) => !prev);
  };

  //detecting and closing the dropdown on click outside
  const dropdownRef = React.useRef();
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (!dropdownRef?.current?.contains(e.target)) {
        const handleClick = () => {
          setClickedMenu(false);
        };
        handleClick();
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  //detecting and closing the navbar on click outside
  const navbar = React.useRef();
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (!navbar?.current?.contains(e.target)) {
        setShown(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [shown]);

  return (
    <nav className={classes.nav} ref={navbar}>
      {!isBigScreen && (
        <button
          className={classes.menuToggle}
          onClick={handleMenuClick}
          aria-label="toggle navigation">
          <img
            aria-hidden="true"
            src={!shown ? iconMenu : iconCloseMenu}
            alt="show navigation"
          />
        </button>
      )}
      {(shown || isBigScreen) && (
        <div
          className={classes.navbar}
          style={{
            position: shown ? "absolute" : "relative",
            left: shown ? "35%" : "0px",
          }}>
          <ul
            ref={dropdownRef}
            className={classes.listItem}
            style={{ display: "flex" }}>
            {menu.map((menuItem, index) => (
              <li key={index} onClick={handleClick(index)}>
                <a>{menuItem.title}</a>
                {menuItem.openMenuIcon && (
                  <img
                    alt="Dropdown menu icon"
                    src={
                      !clickedMenu[index]
                        ? menuItem.closeMenuIcon
                        : menuItem.openMenuIcon
                    }
                  />
                )}
                {menuItem.submenu && (
                  <Dropdown menu={menuItem.submenu} show={clickedMenu[index]} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

Navbar.displayName = "Navbar";
