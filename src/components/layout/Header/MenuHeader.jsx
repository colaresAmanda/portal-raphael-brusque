import React from "react"

import headerLogo from "../../../assets/img/header-logo.svg"


function MenuHeader({menuIsOpen, toggleMenu}) {
  

  return (
    <div className="menu-header">
      <img src={headerLogo} alt="E.M.E.F ALM. Raphael Brusque" className="header-logo"/>
      {menuIsOpen ? <FiX className="toggle-menu-icon" onClick={toggleMenu}/> : <FiMenu className="toggle-menu-icon" onClick={toggleMenu}/>}
    </div>
  )
}

export default MenuHeader
