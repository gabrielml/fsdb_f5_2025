import React from 'react'
import './Botoncito.css'

export const Botoncito = (props) => {
  return (
    <button className="botoncito">Mi primer Botoncito {props.number}</button>
  )
}

export default Botoncito