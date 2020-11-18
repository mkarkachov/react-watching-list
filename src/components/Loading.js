import React from 'react';
import spinner from '../images/spinner.svg'

function Loading(){
  const styles = {
    height:"400px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }

  return (
    <div style={styles}><img src={spinner} alt="" width="200" height="200"/></div>
  )
}

export default Loading;