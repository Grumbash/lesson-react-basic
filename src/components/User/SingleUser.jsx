import React from 'react'
import User from "./UserHOC"

function SingleUser(props) {
  return (
    <div>
      <p>{`- My name is ${props.userName}`}</p>
      <p>{`- ${props.greetings()}`}</p>
    </div>
  )
}

export default User(SingleUser);
