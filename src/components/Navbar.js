import React from "react"
import { FaSearch } from "react-icons/fa"
import livLogo from "../assets/images/Liv-Logo-New.png"
import giantLogo from "../assets/images/Giant-Logo-New copy.png"
import navLinks from "../constants/navlinks"
import { Link } from "gatsby"

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="header">
      <section className="container-top">
        <div className="logo-liv">
          <Link href="/">
            <img src={livLogo} alt="liv brand logo" />
          </Link>
        </div>
        <nav className="navbar-top">
          <ul>
            <li>
              <Link to="/">my account</Link>
            </li>
            <li>
              <a href="#cart"></a>
            </li>
            <li>
              <Link to="/">united kingdom</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="container-bottom">
        <div className="logo-giant">
          <Link to="/">
            <img src={giantLogo} alt="giant brand logo" />
          </Link>
        </div>
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          onChange={toggleSidebar}
        />
        <label
          for="nav-toggle"
          className="nav-toggle-label"
          onChange={toggleSidebar}
        >
          <span></span>
        </label>
        <nav
          className={isOpen ? "navbar-bottom visible" : "navbar-bottom hidden"}
        >
          <ul>
            {navLinks.map(link => {
              return (
                <li className={link.size}>
                  <Link to={link.pathTo} className={link.btn}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="brand-liv">
            shop our brands:
            <br />
            <Link to="/">
              <img src={livLogo} alt="liv brand logo" />
            </Link>
          </div>
          <div className="search-btn">
            <FaSearch />
          </div>
        </nav>
      </section>
    </div>
  )
}

export default Navbar
