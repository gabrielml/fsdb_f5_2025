import React from 'react'
import './Botoncito.css'

// TODO: (?) Is it a godd practice to write functions outside the Component? In this case, Button.
const printMsg = () => {
  console.log("You just pressed the button!");
}

export const Botoncito = (props) => {

  return (
    <button className="botoncito" onClick={printMsg}>Mi primer Botoncito {props.number}</button>
  )
}

export default Botoncito