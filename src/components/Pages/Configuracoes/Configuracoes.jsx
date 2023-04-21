import React, { useState } from "react"

import "./configuracoes.css"
// Pages
import Sidebar from "./Sidebar/Sidebar.jsx"

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

      <div className="configuracoes-content">
        <h2>Configurações</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          accusantium cupiditate illo tenetur ratione ducimus consequatur hic
          officia ipsa itaque reprehenderit reiciendis tempore voluptatem,
          placeat non, impedit consequuntur, et eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          accusantium mollitia nihil temporibus eligendi deserunt! Sed eligendi
          voluptatem consectetur dicta reprehenderit numquam quas vero
          asperiores! Tempore quos voluptas sequi iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error
          ipsum praesentium vero nostrum maiores repudiandae expedita, ullam
          illo, aut harum est cumque possimus laudantium molestias dignissimos
          temporibus! Qui, exercitationem!
        </p>
      </div>
    </section>
  )
}

export default Configuracoes
