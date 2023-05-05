import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar textNone">
      <CustomLink to="/" className="nav-link">
        <img src="img/FavIcon.png" alt="Home" className="LogoNav"></img>
      </CustomLink>
      <ul className={showMenu ? "navbar-nav show" : "navbar-nav"}>
        <li className="nav-item">
          <CustomLink to="/aulas" className="nav-link">
            Aulas
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/planos" className="nav-link">
            Planos
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/conta" className="nav-link">
            Conta
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/sobre" className="nav-link">
            Sobre
          </CustomLink>
        </li>
      </ul>
      <div className="hamburger menuLateral" onClick={handleClick}>
        ☰
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default NavBar;
