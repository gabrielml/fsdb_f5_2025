import React from 'react'
import './Botoncito.css'

// TODO: (?) Is it a godd practice to write functions outside the Component? In this case, Button.
const printMsg = (btnNum) => {
  console.log(`You just pressed the button ${btnNum} !`);
}

export const Botoncito = (props) => {

  return (
    <button className="botoncito" onClick={() => {printMsg(props.number)}}>Mi primer Botoncito {props.number}</button>
  )
}

export default Botoncito