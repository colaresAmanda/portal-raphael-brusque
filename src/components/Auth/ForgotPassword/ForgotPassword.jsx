import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import "./forgotPassword.css"


import { Context } from "../../../contexts/UserContext"

import Loader from "../../layout/Loader/Loader"
import PasswordInput from "../../layout/Inputs/PasswordInput"

function ForgotPassword() {
  const [buttonSelected, setButtonSelected] = useState("aluno")
  const [codeSent, setCodeSent] = useState(false)
  const [user, setUser] = useState({})
  const { generateResetPasswordCode, loading, resetPassword } =
    useContext(Context)

    let navigate = useNavigate();

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleCodeSubmit = async (e) => {
    e.preventDefault()

    await generateResetPasswordCode(user).then((response) => {
      if (response !== "error") setCodeSent(true)
    })
  }
  const handlePasswordChange = async (e) => {
    e.preventDefault()

    await resetPassword(user).then((response) => {
      if (response === "sucess") navigate('/login')
    })
  }

  return (
    <section className="section forgotPass-section">
      <div className="center-box">
        <div className="content">
          <div className="header">
            <h2 className="title">Esqueceu a sua senha?</h2>
            {loading && <p></p>}
            <div className="buttons">
              <button
                id="sou-aluno"
                className={
                  buttonSelected === "aluno"
                    ? "primary-button button"
                    : "secondary-button button"
                }
                onClick={() => setButtonSelected("aluno")}
              >
                Sou Aluno
              </button>
              <button
                id="sou-funcionario"
                className={
                  buttonSelected === "funcionario"
                    ? "primary-button button"
                    : "secondary-button button"
                }
                onClick={() => setButtonSelected("funcionario")}
              >
                Sou Funcionário
              </button>
            </div>
          </div>
          <div className="body">
            {buttonSelected === "aluno" ? (
              <div className="aluno">
                <p className="text">
                  Alunos não podem alterar a própria senha. Caso tenha esquecido
                  a sua, entre em contato com a <strong>coordeação</strong>.
                </p>
              </div>
            ) : (
              <div className="funcionario">
                {codeSent ? (
                  <>
                    <p className="text">
                      Verifique seu email e digite o código recebido
                    </p>
                    <form onSubmit={handlePasswordChange}>
                      <div className="form-control">
                        <label htmlFor="">Digite o código recebido</label>
                        <input
                          type="text"
                          placeholder="Código"
                          name="code"
                          id="code"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">Digite sua nova senha</label>
                        <PasswordInput handleOnChange={handleOnChange} />
                      </div>

                      <div className="form-control">
                        <input
                          className="button primary-button"
                          type="submit"
                          value="Alterar Senha"
                        />
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="text">
                      Será enviado um código no seu email para confirmar que
                      você é o proprietário da conta.
                    </p>
                    <form onSubmit={handleCodeSubmit}>
                      <div className="form-control">
                        <label htmlFor="">Digite seu login</label>
                        <input
                          type="text"
                          placeholder="Login"
                          name="login"
                          id="login"
                          onChange={handleOnChange}
                          required={true}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">
                          Digite o email cadastrado no sistema
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                          onChange={handleOnChange}
                          required={true}
                        />
                      </div>
                      <div className="form-control">
                        <button
                          className="button primary-button"
                          type="submit"
                          // value="Enviar Código"
                        >
                          {loading ? <Loader /> : "Enviar código"}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            )}

            <Link to="/login" className="link">
              <FiArrowLeft className="arrow-icon" /> Voltar para página de login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
