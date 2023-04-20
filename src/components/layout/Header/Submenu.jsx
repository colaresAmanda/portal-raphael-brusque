import React from "react"
import { Link } from "react-router-dom"

function Submenu({ options, linkTo, visibility, pathname }) {
  // console.log(pathname)

  return (
    <ul className="submenu hidden">
      {options.map((option, index) => (
        <li
          key={index}
          className={`submenu-item ${!visibility && "hidden"} ${
            pathname === `/${linkTo}/${option}` && "selected"
          }`}
        >
          <Link to={`/${linkTo}/${option}`}>{option}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Submenu
