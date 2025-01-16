import * as React from "react";
import { Link } from "gatsby";
import "../styles/header.css";

const Header = ({ siteTitle }) => (
  <header>
    <ul>
       <li>
       <Link to="/" className="site-title">{siteTitle}</Link>
       </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">Om Mig</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </header>
);

export default Header;
