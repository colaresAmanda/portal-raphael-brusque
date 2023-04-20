import React, { useState } from "react"

import Submenu from "./Submenu.jsx"

import { Link } from "react-router-dom"

function Menu({ menuIsOpen, pathname }) {

  const MOPTIONS = {
    Alunos: false,
    Turmas: false,
    Funcionarios: false,
  }
  
  const [menuOptions, setMenuOptions] = useState(MOPTIONS)

  function toggleMenuMobile(index) {
    const newObj = MOPTIONS

    if (index === 0) {
      newObj.Alunos = true
    } else if (index === 1) {
      newObj.Turmas = true
    } else if (index === 2) {
      newObj.Funcionarios = true
    }

    setMenuOptions(newObj)
  }

  return (
    <ul className={`menu ${!menuIsOpen && "hidden"}`}>
      <li
        className={`menu-item ${pathname === "/" && "selected"}`}
        onClick={() => setMenuOptions(MOPTIONS)}
      >
        <Link to="/">Início</Link>
      </li>
      <li
        className={`menu-item ${menuOptions.Alunos && "selected"}`}
        onClick={() => toggleMenuMobile(0)}
      >
        Alunos
        <Submenu
          linkTo={"Alunos"}
          options={["Listar", "Cadastrar"]}
          visibility={menuOptions.Alunos && true}
          pathname={pathname}
        />
      </li>
      <li
        className={`menu-item ${menuOptions.Turmas && "selected"}`}
        onClick={() => toggleMenuMobile(1)}
      >
        Turmas
        <Submenu
          linkTo={"Turmas"}
          options={["Listar", "Cadastrar"]}
          visibility={menuOptions.Turmas && true}
          pathname={pathname}
        />
      </li>
      <li
        className={`menu-item ${menuOptions.Funcionarios && "selected"}`}
        onClick={() => toggleMenuMobile(2)}
      >
        Funcionários
        <Submenu
          linkTo={"Funcionarios"}
          options={["Listar", "Cadastrar"]}
          visibility={menuOptions.Funcionarios && true}
          pathname={pathname}
        />
      </li>
      <li
        className={`menu-item ${pathname === "/" && "selected"}`}
        onClick={() => setMenuOptions(MOPTIONS)}
      > Sair
      </li>
    </ul>
  )
}

export default Menu
