import React, { useContext } from "react"

// import Submenu from "./Submenu.jsx"

import { Link } from "react-router-dom"

import { Context } from "../../../contexts/UserContext.jsx"

function Menu({ menuIsOpen, pathname }) {
  // const MOPTIONS = {
  //   Alunos: false,
  //   Turmas: false,
  //   Funcionarios: false,
  // }

  // const [menuOptions, setMenuOptions] = useState(MOPTIONS)
  const {logout} = useContext(Context)
  // function toggleMenuMobile(index) {
  //   const newObj = MOPTIONS

  //   if (index === 0) {
  //     newObj.Alunos = true
  //   } else if (index === 1) {
  //     newObj.Turmas = true
  //   } else if (index === 2) {
  //     newObj.Funcionarios = true
  //   }

  //   setMenuOptions(newObj)
  // }

  return (
    <ul className={`menu ${!menuIsOpen && "hidden"}`}>
      <li
        className={`menu-item ${pathname === "/" && "selected"}`}
        // onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/">Início</Link>
      </li>
      <li
        className={`menu-item ${pathname === "/Alunos" && "selected"}`}
        // onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/Alunos">Alunos</Link>
      </li>
      <li
        className={`menu-item ${pathname === "/Turmas" && "selected"}`}
        // onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/Turmas">Turmas</Link>
      </li>
      <li
        className={`menu-item ${pathname === "/Funcionarios" && "selected"}`}
        // onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/Funcionarios">Funcionários</Link>
      </li>
      <li
        className={`menu-item ${pathname === "/Configuracoes" && "selected"}`}
        // onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/Configuracoes">Configurações</Link>
      </li>
      <li
        className={`menu-item ${pathname === "/Sair" && "selected"}`}
        onClick={() => logout()}
      >
        Sair
      </li>
    </ul>
  )
}

export default Menu
