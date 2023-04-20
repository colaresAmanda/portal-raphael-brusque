// hooks
import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// styles
import "./login.css"

// icons
import PasswordInput from "../../layout/Inputs/PasswordInput"

import { Context } from "../../../contexts/UserContext"
import Loader from "../../layout/Loader/Loader"

function Login() {
  // const [credentials, setCredentials] = useState([])
  const { loading, authenticated, login } = useContext(Context)
  const [rememberMe, setRememberMe] = useState(false)
  const [user, setUser] = useState({})

  let navigate = useNavigate()

  useEffect(() => {
    if (authenticated) navigate("/")
  }, [authenticated, navigate])

  async function handleSubmit(e) {
    e.preventDefault()

    login(user, rememberMe)
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <section className="section login-section">
      <div className="login-content">
        <div className="left">
          <div className="header">
            <h2 className="title">Bem-vindo</h2>
            <p className="subtitle text">
              Digite suas credenciais para poder acessar o sistema
            </p>
          </div>

          <form data-netlify="true" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="inp-login" className="text">
                Login
              </label>
              <input
                type="text"
                name="login"
                id="login"
                placeholder="Digite seu login"
                onChange={handleOnChange}
              />
            </div>

            <div className="form-control">
              <label htmlFor="inp-password" className="text">
                Senha
              </label>
              <PasswordInput handleOnChange={handleOnChange} />
            </div>

            <div className="form-control user-utils">
              <div className="remember-me">
                <input type="checkbox" name="remembre-me" id="remembre-me" onChange={() => setRememberMe(!rememberMe)}/>
                <label htmlFor="remembre-me">Lembrar de mim</label>
              </div>

              <Link to="esqueceu-senha" className="link">
                Esqueceu sua senha?
              </Link>
              {/* <a className="link" href=""></a> */}
            </div>

            <div className="form-control">
              <button className="button primary-button" type="submit">
                {loading ? <Loader /> : "Entrar"}
              </button>
            </div>
          </form>
        </div>

        <div className="right">
          {/* <img
            src="https://cdn.dribbble.com/users/464226/screenshots/18104625/media/0a202079ee07752c95691197b3be503d.png"
            alt="Made by Alex S. Mostov"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Login
