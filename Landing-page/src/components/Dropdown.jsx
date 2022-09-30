import React from "react";
//styles
import styles from "./header.module.css";

const Dropdown = (props) => {
  const { menu, show } = props;
  return (
    <ul className={`${styles.dropdown} ${show ? styles.show : ""}`}>
      {menu.map((menuItem, index) => (
        <li key={index}>
          {menuItem.icon && <img src={menuItem.icon} alt={menuItem.title} />}
          <a>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

Dropdown.displayName = "Dropdown";
