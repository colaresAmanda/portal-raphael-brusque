import React from "react"

function Cadastrar() {
  return (
    <div className="content">
      <form action="">
        <div className="form-control">
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" placeholder="Nome" />
        </div>
        <div className="form-control">
          <label htmlFor="">Código</label>
          <input type="text" name="" id="" placeholder="Código" />
        </div>
        <div className="form-control">
          <label htmlFor="">Trimestre</label>
          <input type="number" name="" id="" placeholder="Trimestre" />
        </div>
        <div className="form-control">
          <label htmlFor="">Ano Corrente</label>
          <input type="number" name="" id="" placeholder="Ano Corrente" />
        </div>

        {/* TODO: Buscar coordenador do bd */}
        {/* <div className="form-control">
          <label htmlFor="cars">Selecione o coordenador</label>

          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div> */}
        <div className="form-control">
              <button className="button primary-button" type="submit">
                {/* {loading ? <Loader /> : "Entrar"} */}
                Salvar
              </button>
            </div>
      </form>
    </div>
  )
}

export default Cadastrar
