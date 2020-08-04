import React from 'react'
import withDisable  from "./withDisable"

 function Minus(props) {
  return (
    <button onClick={props.handleClick} disabled={props.isMinusDisabled}>
      -
    </button>
  )
}

export default withDisable(Minus)
