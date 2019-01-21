import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default props => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <h1>{props.headerText}</h1>
    {props.navigate && (
      <ul style={{ listStyle: `none`, alignItems: "center" }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/profile/">Profile</ListLink>
      </ul>
    )}
  </div>
);
