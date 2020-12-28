import React from "react";
import "../chat.css";

export function Header(props) {
  return <div className="header">{props.children}</div>;
}

export default Header;
