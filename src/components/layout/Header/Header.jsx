import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

//assets
import "./header.css"
import Logo from "../../../assets/img/header-logo.svg"

// components
import Menu from "./Menu"

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuIsOpen(false) // Close the navigation panel
  }, [pathname])

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header>
      <div className="navbar">

        <div className="nav-header">
          <Link to="/">
            <img
              src={Logo}
              alt="E.M.E.F ALM. Raphael Brusque"
              className="logo"
            />
          </Link>

          {menuIsOpen ? (
            <FiX className="menu-icon" onClick={toggleMenu} />
          ) : (
            <FiMenu className="menu-icon" onClick={toggleMenu} />
          )}
        </div>

        <Menu menuIsOpen={menuIsOpen} pathname={pathname} />
        
      </div>
    </header>
  )
}

export default Header
