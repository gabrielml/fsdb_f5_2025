import React, { useState } from 'react'
import './Botoncito.css'

// TODO: (?) Is it a godd practice to write functions outside the Component? In this case, Button.
const printMsg = (btnNum) => {
  console.log(`You just pressed the button ${btnNum} !`);
}

export const Botoncito = (props) => {
  // State to store the hex color value
  const [color, setColor] = useState("#4CAF50"); // Initial color

  // Generate a random 6-digit hex string
  const randomColor = () => {
    // Math.random() generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
    // .toString(16) converts the random number into its hexadecimal (base 16) string representation.
    // .slice(-6) extracts the last 6 characters from the string.
    // TODO: Improve this statement because it could partially work, but with a significant flaw...
    const newHexColor = "#" + (Math.random().toString(16).slice(-6));
    console.log(newHexColor);
    setColor(newHexColor);
}

  return (
    <button 
      className="botoncito"
      style = {{ backgroundColor: color }} 
      onClick={() => {printMsg(props.number); randomColor()}}
    >
      Mi primer Botoncito {props.number}
    </button>
  )
}

export default Botoncito