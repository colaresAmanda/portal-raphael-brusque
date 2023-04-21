import React from 'react'

function Content({title}) {
  return (
    <div className='configuracoes-content'>
        <h2 className='title'>{title}</h2>
        <div className="container">
            <div className="header">
                <button>Listar</button>
                <button>Cadastrar</button>
            </div>
            <div className="content">
                
            </div>
        </div>
    </div>
  )
}

export default Content