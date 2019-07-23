import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...other }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...other}
  >
    {children}
  </button>
);

export default CustomButton;
