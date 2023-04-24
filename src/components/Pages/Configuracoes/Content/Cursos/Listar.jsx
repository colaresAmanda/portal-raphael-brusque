import React from 'react'

function Listar() {
  return (
    <div className="content listar">
       <table>
  <tr>
    <th>Nome</th>
    <th>COD</th>
    <th>Ano</th>
    <th>Cordenação</th>
  </tr>
  <tr>
    <td>Ensino Fundamental I</td>
    <td>EFI</td>
    <td>2023</td>
    <td>Amanda Colares</td>
  </tr>
  <tr>
    <td>Ensino Fundamental II</td>
    <td>EFII</td>
    <td>2023</td>
    <td>Taís Pereira</td>

  </tr>
  <tr>
    <td>Ensino Médio</td>
    <td>EM</td>
    <td>2023</td>
    <td>Viviane Delgado</td>

  </tr>
</table> 
    </div>
  )
}

export default Listar