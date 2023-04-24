import React, { useState } from "react"

// Import components for listing and adding courses
import Listar from "./Listar.jsx"
import Cadastrar from "./Cadastrar.jsx"

function Cursos() {
  // Set initial state for whether to show the list of courses or the add course form
  const [isListing, setIsListing] = useState(true)

  return (
    <div className="configuracoes">
      {/* Title for the courses section */}
      <h2 className="title">Cursos</h2>

      <div className="container">
        <div className="header">
          {/* Button to show the list of courses */}
          <button
            onClick={() => setIsListing(true)}
            className={isListing ? "selected" : ""}
          >
            Listar
          </button>

          {/* Button to show the add course form */}
          <button
            onClick={() => setIsListing(false)}
            className={isListing ? "" : "selected"}
          >
            Cadastrar
          </button>
        </div>
      
        {/* If isListing is true, show the list of courses */}
        {isListing && <Listar />}

        {/* If isListing is false, show the add course form */}
        {!isListing && <Cadastrar />}
      </div>
    </div>
  )
}

export default Cursos
