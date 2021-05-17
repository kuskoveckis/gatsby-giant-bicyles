import React from "react"
import { FaSearch } from "react-icons/fa"
import livLogo from "../assets/images/Liv-Logo-New.png"
import navLinks from "../constants/navlinks"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={isOpen ? "sidebar visible" : "sidebar hidden"}>
      <ul>
        {navLinks.map(link => {
          return (
            <li className={link.size}>
              <Link
                to={link.pathTo}
                className={link.btn}
                onClick={toggleSidebar}
              >
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
  )
}

export default Sidebar
