import React, { useState } from "react"

import { FiEye, FiEyeOff } from "react-icons/fi"

import './inputPassword.css'
function Password({handleOnChange}) {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  return (
    <>
      <input
        type={passwordVisibility ? "text" : "password"}
        name="senha"
        id="inp-password"
        placeholder="Digite sua senha"
        onChange={handleOnChange}
      />
      <div className="icons-password">
        {passwordVisibility ? (
          <FiEyeOff
            className="icon-password"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          />
        ) : (
          <FiEye
            className="icon-password"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          />
        )}
      </div>
    </>
  )
}

export default Password
