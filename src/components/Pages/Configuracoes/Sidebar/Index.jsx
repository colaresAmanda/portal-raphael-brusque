import React, { useState } from "react"
import { Description } from "../ConfiguracoesText"

// Assets
import "./sidebar.css"
import { RiArrowRightSLine } from "react-icons/ri"

// Components
import SidebarOptions from "./SidebarOptions.jsx"
function Index({
  sidebarOptionsStatus,
  setSidebarOptionsStatus,
  DEFAULTOPTIONS,
}) {


    const [closeSidebar, setCloseSidebar] = useState(true)

  
  function SelectOption(section, index) {
    let arr = JSON.parse(JSON.stringify(DEFAULTOPTIONS))

    arr["Estrutura da Escola"].Cursos = false

    if (section === Object.keys(DEFAULTOPTIONS)[0]) {
      if (index === 0) {
        arr["Estrutura da Escola"].Cursos = true
      } else if (index === 1) {
        arr["Estrutura da Escola"].Turmas = true
      } else if (index === 2) {
        arr["Estrutura da Escola"].Disciplinas = true
      }
    } else if (section === Object.keys(DEFAULTOPTIONS)[1]) {
      if (index === 0) {
        arr["Usuários"].Alunos = true
      } else if (index === 1) {
        arr["Usuários"]["Funcionários"] = true
      }
    } else if (section === Object.keys(DEFAULTOPTIONS)[2]) {
      if (index === 0) {
        arr["Minhas Informações"].Perfil = true
      }
    }

    setSidebarOptionsStatus(arr)
  }

  return (
    <div className={`sidebar ${closeSidebar ? "hidden" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Configurações</h2>
        <button onClick={() => setCloseSidebar(!closeSidebar)}>
          <RiArrowRightSLine />
        </button>
      </div>
      <p className="sidebar-description">{Description.Direcao}</p>
      <div className="sidebar-menu">
        <SidebarOptions
          subtitle={"Estrutura da Escola"}
          options={["Cursos", "Turmas", "Disciplinas"]}
          sidebarOptionsStatus={sidebarOptionsStatus}
          selectOption={SelectOption}
        />

        <SidebarOptions
          subtitle={"Usuários"}
          options={["Alunos", "Funcionários"]}
          sidebarOptionsStatus={sidebarOptionsStatus}
          selectOption={SelectOption}
        />

        <SidebarOptions
          subtitle={"Minhas Informações"}
          options={["Perfil"]}
          sidebarOptionsStatus={sidebarOptionsStatus}
          selectOption={SelectOption}
        />
      </div>
    </div>
  )
}

export default Index
