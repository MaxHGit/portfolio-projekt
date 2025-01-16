import * as React from "react";
import { Link } from "gatsby";
import "../styles/header.css";

const Header = ({ siteTitle }) => (
<header className="site-header">
  <div className="nav-container">
    <div className="site-title">
      <Link to="/">{siteTitle}</Link>
    </div>
    <nav>
      <ul className="nav-links">
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
    </nav>
  </div>
</header>

);

export default Header;
