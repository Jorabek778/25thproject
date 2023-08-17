import React from 'react'
import ClasS from "./Button.module.css"

const Button = (props) => {
  return <button onClick={props.onClick} className={ClasS.button}>{props.children}</button>
}

export default Button