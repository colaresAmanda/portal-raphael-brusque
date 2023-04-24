import React, { useState } from "react"

import "./configuracoes.css"
// Pages
import Sidebar from "./Sidebar/Sidebar.jsx"
// import Content from "./Content/Content"

import Cursos from "./Content/Cursos/Cursos"
function Configuracoes() {
  const SIDEBARDEFAULT = {
    "Estrutura da Escola": {
      Cursos: true,
      Turmas: false,
      Disciplinas: false,
    },
    Usuários: {
      Alunos: false,
      Funcionários: false,
    },
    "Minhas Informações": {
      Perfil: false,
    },
  }
  const [sidebarStatus, setSidebarStatus] = useState(SIDEBARDEFAULT)

  return (
    <section className="section configuracoes-section">
      <Sidebar
        sidebarStatus={sidebarStatus}
        setSidebarStatus={setSidebarStatus}
        DEFAULTOPTIONS={SIDEBARDEFAULT}
      />

      {sidebarStatus["Estrutura da Escola"].Cursos && <Cursos />}
    </section>
  )
}

export default Configuracoes
