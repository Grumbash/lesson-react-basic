import React from 'react'
import withDisable  from "./withDisable"

function Plus(props) {
  return (
    <button onClick={props.handleClick} disabled={props.isPlusDisabled}>
      +
    </button>
  )
}

export default withDisable(Plus)