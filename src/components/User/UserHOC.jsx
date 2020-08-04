import React from 'react'


export default (WrappedComponent) => {
 
  const hocComponent = (props) =>{ 
  const greetings = () => `Hello, ${props.userName}!`
  return <WrappedComponent {...props} greetings={greetings}/>
}

  return hocComponent
}

