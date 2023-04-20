import api from "../utils/api.jsx"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useFlashMessage from "./useFlashMessage.jsx"

export default function useAuth() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function generateResetPasswordCode(user) {
    let msgText = "Código enviado para o seu email"
    let msgType = "sucess"

    setLoading(true)
    try {
      await api.post("/usuario/generate-reset-pass-code", user)
    } catch (error) {
      msgText = error.response.data.message
      msgType = "error"
    }

    setFlashMessage(msgText, msgType)
    setLoading(false)
    return msgType
  }

  async function resetPassword(user) {
    let msgText = "Senha Alterada com sucesso"
    let msgType = "sucess"

    setLoading(true)
    try {
      await api.post("/usuario/reset-password", user)
    } catch (error) {
      msgText = error.response.data.message
      msgType = "error"
    }

    setFlashMessage(msgText, msgType)
    setLoading(false)

    return msgType
  }
  async function login(user, rememberMe) {
    let msgText = "Login realizado com sucesso!"
    let msgType = "sucess"

    setLoading(true)
    try {
      const data = await api.post("/usuario/login", user).then((response) => {
        return response.data
      })

      await authUser(data, rememberMe)
    } catch (error) {
      msgText = error.response.data.message
      msgType = "error"
    }

    setFlashMessage(msgText, msgType)
    setLoading(false)
  }

  async function checkUser(token){
    
  }

  async function authUser(data, rememberMe) {
    setAuthenticated(true)
    if (rememberMe) 
      localStorage.setItem("token", JSON.stringify(data.token))
    else
      sessionStorage.setItem("token", JSON.stringify(data.token))


    navigate("/")
  }
  return {
    authenticated,
    loading,
    login,
    generateResetPasswordCode,
    resetPassword,
    checkUser
  }
}
