import React from 'react'
import User from "./UserHOC"

function NewUser(props) {
  return (
    <div>
      <p>{`${props.userName} is a new user!`}</p>
      <p>{`${props.greetings()}`}</p>
    </div>
  )
}

export default User(NewUser);