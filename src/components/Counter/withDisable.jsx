import React from 'react'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
  if(props.user.isAuthorased){
    return <WrappedComponent {...props}  />
  }
  return <Redirect to="/login"></Redirect>
}

  return hocComponent
}
