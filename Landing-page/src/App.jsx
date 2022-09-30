import React from "react";
//assets
import { menu, clients } from "./data";
import "./index.css";

//components
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Header menu={menu} />
      <MainContent clients={clients} />
    </>
  );
};

export default App;
