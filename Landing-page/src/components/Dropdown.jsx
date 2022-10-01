import React from "react";
//styles
import styles from "./header.module.css";

const Dropdown = (props) => {
  const { menu, show } = props;
  return (
    <ul
      id="dropdown"
      className={`${styles.dropdown} ${show ? styles.show : ""}`}>
      {menu.map((menuItem, index) => (
        <li key={index}>
          <a href="" onClick={(e) => e.preventDefault()}>
            {menuItem.icon && (
              <img
                aria-hidden="true"
                src={menuItem.icon}
                alt={`${menuItem.title} icon`}
              />
            )}
            {menuItem.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

Dropdown.displayName = "Dropdown";
