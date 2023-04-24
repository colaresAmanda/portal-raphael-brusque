import React, { useState } from 'react'
import Cursos from './Cursos/Cursos'
import Turmas from  './Turmas/Turmas'
import Disciplinas from  './Disciplinas/Disciplinas'

import './content.css'
function Content({title, sidebarStatus}) {
  const [selectedOption, setSelectedOption] = useState(true)
  return (
    <div className='configuracoes-content'>
        <h2 className='title'>{title}</h2>
        <div className="container">
          {/* <Header /> */}
            <div className="header">
                <button className={selectedOption ? "selected" : ""}>Listar</button>
                <button className={selectedOption ? "" : "selected"}>Cadastrar</button>
            </div>
            <div className="content">
                  {sidebarStatus["Estrutura da Escola"].Cursos && <Cursos />}
                  {sidebarStatus["Estrutura da Escola"].Turmas && <Turmas />}
                  {sidebarStatus["Estrutura da Escola"].Disciplinas && <Disciplinas />}
            </div>
        </div>
    </div>
  )
}

export default Content