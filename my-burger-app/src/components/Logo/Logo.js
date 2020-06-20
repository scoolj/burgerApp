import React from "react";
import burgerLogo from "../../components/assets/images/133 burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}  >
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
