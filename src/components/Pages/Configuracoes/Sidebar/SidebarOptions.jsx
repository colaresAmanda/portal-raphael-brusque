import  { useState } from "react"

function SidebarOptions({ subtitle, options, defaultOptions}) {

  const [sidebarOptions, setSidebarOptions] = useState(defaultOptions)

  function SelectOption(section, index) {
    let arr = defaultOptions

    if (section === Object.keys(defaultOptions)[0]) {
      if (index === 0) {
        arr["Estrutura da Escola"].Cursos = true
      } else if (index === 1) {
        arr["Estrutura da Escola"].Turmas = true
      } else if (index === 2) {
        arr["Estrutura da Escola"].Disciplinas = true
      }


    } else if (section === Object.keys(defaultOptions)[1]) {
      if (index === 0) {
        arr["Usuários"].Alunos = true
      } else if (index === 1) {
        arr["Usuários"].Funcionarios = true
      }


    } else if (section === Object.keys(defaultOptions)[2]) {
      if (index === 0) {
        arr["Minhas Informações"].Perfil = true
      }
    }
    setSidebarOptions(arr)
  }

  console.log(sidebarOptions)
  return (
    <>
      <h3 className="sidebar-subtitle">{subtitle}</h3>
      <div className="menu-options">
        {options.map((option, index) => (
          <button key={index} onClick={() => SelectOption(subtitle, index)} >
            {option}
          </button>
        ))}
      </div>
    </>
  )
}

export default SidebarOptions
