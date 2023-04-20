import React, { useEffect, useState } from "react";

import bus from '../../../utils/bus'

import './message.css'
function Message() {
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('Olá, este é um teste');
    let [type, setType] = useState('sucess');

    useEffect(() => {
        bus.addListener('flash', ({message, type}) => {
            setVisibility(true);
            setMessage(message);
            setType(type);
            setTimeout(() => {
              setVisibility(false);
            }, 4000);
        })
    }, [])


//   useEffect(() => {
//     if (document.querySelector(".close") !== null) {
//       document
//         .querySelector(".close")
//         .addEventListener("click", () => setVisibility(false));
//     }
//   });

  return (
    visibility && (
        <div className={`message ${type === 'sucess' ? 'sucess' : 'error'}`} onClick={() => {setVisibility(!visibility)}}>{message}</div>
      )
  )
}

export default Message