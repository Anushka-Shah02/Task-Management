import React from 'react'
// import firebase from 'firebase/compat/app';
// import { auth } from '../firebase1'
import "firebase/firestore";
const styles={
  btn:{
    backgroundColor:"blue",
    border:"1px solid blue",
    borderRadius:"10px",
    color:"white",
    fontSize:"1.3rem",
    padding:"7px"
  },
  design:{
    textAlign:"center",
    marginTop:"60%"
  },
  heading:{
    boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 9px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor:"#282c34",
    borderRadius:"5px",
    padding:"8px",
    color:"white"
  }
}
function Signin() {
    // function signInWithGoogle()
    // {
    //     const provider=new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider)
    // }
  return (
    <div style={styles.design}>
      <h3 style={styles.heading}>Hey User!</h3>
      <p>Sign In to Continue...</p>
      {/* <button style={styles.btn} onClick={signInWithGoogle}>Sign In</button> */}
    </div>
  )
}

export default Signin
