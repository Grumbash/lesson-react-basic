import React from 'react'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
  let isMinusDisabled = false;
  let isPlusDisabled = false;
  if(props.count >= 10 ){
    isPlusDisabled = true
  }

  if(props.count <= -10){
    isMinusDisabled = true
  }
  return <WrappedComponent {...props} isDisabled={isMinusDisabled} />
}

  return hocComponent
}
