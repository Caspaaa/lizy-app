import * as React from "react";
import logo from "../assets/images/logo.png";

export const Header: React.FunctionComponent = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo-lizy-hungry" />
    </div>
  );
};
