import React from "react"
import { Description } from "../ConfiguracoesText"

// Assets
import "./sidebar.css"
import { RiArrowRightSLine } from "react-icons/ri"

// Components
import SidebarOptions from './SidebarOptions.jsx'
function Index() {
  const defaultOptions = {
    "Estrutura da Escola": {
      Cursos: false,
      Turmas: false,
      Disciplinas: false,
    },
    "Usuários": {
      Alunos: false,
      Funcionarios: false,
    },
    "Minhas Informações": {
      Perfil: false,
    },
  }


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Configurações</h2>
        <button>
          <RiArrowRightSLine />
        </button>
      </div>
      <p className="sidebar-description">{Description.Direcao}</p>
      <div className="sidebar-menu">
        <SidebarOptions subtitle={"Estrutura da Escola"} options={["Cursos", "Turmas", "Disciplinas"]} defaultOptions={defaultOptions}/>

        <SidebarOptions subtitle={"Usuários"} options={["Alunos", "Funcionários"]} defaultOptions={defaultOptions}/>
        
        <SidebarOptions subtitle={"Minhas Informações"} options={["Perfil"]} defaultOptions={defaultOptions}/>
      </div>
    </div>
  )
}

export default Index
