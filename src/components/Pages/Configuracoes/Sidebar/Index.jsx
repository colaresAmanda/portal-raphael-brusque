import React, { useState } from "react"
import { Description } from "../ConfiguracoesText"

// Importing styles and icons
import "./sidebar.css"
import { RiArrowRightSLine } from "react-icons/ri"

// Importing SidebarOptions component
import SidebarOptions from "./SidebarOptions.jsx"

// Functional component that receives sidebarStatus, setSidebarStatus, and DEFAULTOPTIONS props
function Index({ sidebarStatus, setSidebarStatus, DEFAULTOPTIONS }) {

  // Setting isSidebarOpen state variable to false by default
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // SelectOption function that receives a section and index as parameters
  function SelectOption(section, index) {
    // Cloning DEFAULTOPTIONS with JSON.parse and JSON.stringify methods to avoid mutation
    let arr = JSON.parse(JSON.stringify(DEFAULTOPTIONS))

    // Setting Estrutura da Escola.Cursos to false
    arr["Estrutura da Escola"].Cursos = false

    // Checking the selected section and index and updating arr accordingly
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

    // Updating sidebarStatus with the new arr object
    setSidebarStatus(arr)
  }

  // The component JSX code with the SidebarOptions component, which receives subtitle, options, sidebarStatus, and selectOption props
  return (
    <div className={`sidebar ${isSidebarOpen ? "hidden" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Configurações</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <RiArrowRightSLine />
        </button>
      </div>
      <p className="sidebar-description">{Description.Direcao}</p>
      <div className="sidebar-menu">
        <SidebarOptions
          subtitle={"Estrutura da Escola"}
          options={["Cursos", "Turmas", "Disciplinas"]}
          sidebarStatus={sidebarStatus}
          selectOption={SelectOption}
        />

        <SidebarOptions
          subtitle={"Usuários"}
          options={["Alunos", "Funcionários"]}
          sidebarStatus={sidebarStatus}
          selectOption={SelectOption}
        />

        <SidebarOptions
          subtitle={"Minhas Informações"}
          options={["Perfil"]}
          sidebarStatus={sidebarStatus}
          selectOption={SelectOption}
        />
      </div>
    </div>
  )
}

// Exporting the component as the default export
export default Index
