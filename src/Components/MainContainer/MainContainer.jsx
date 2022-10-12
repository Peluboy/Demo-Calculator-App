import React, { useState } from "react";
import App from "../Apps";
import "./MainContainer.css";

const MainContainer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "containerDark" : "containerLight"}>
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default MainContainer;
