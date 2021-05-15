import * as React from "react";
import logo from "../assets/images/logo.png";

interface Props {}

export const Header: React.FunctionComponent<Props> = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo-lizy-hungry" />
    </div>
  );
};
