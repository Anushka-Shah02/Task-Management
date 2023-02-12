import React from 'react'
import { useState } from 'react'
import { db,auth } from '../firebase1';
import firebase from 'firebase/compat/app';
import sent from '../images/sent.png'
const styles={
  box:{
    top:"441px",
    position:"absolute"
  },
  formCont:{
    display:"flex",
    width:"400px"
  },
  btn:{
    // marginLeft:"2px",
    // borderRadius:"10px",
    padding:"7px",
    backgroundColor:"transparent",
    // color:"white",
    border:"0px solid lightgray",
    position:"relative",
    left:"-28px"
  },
  text:{
    // borderRadius:"10px",
    border:"0px solid lightgray",
    padding:"10px",
    position:"relative",
    left:"-28px",
    width:"250px",
    overflowWrap:"break-word",
    backgroundColor:"transparent"
  },
  icon:{
  width:"30px",
  height:"30px"
  }
}

function SendMessage() {
    const[message,setMessage]=useState("");

    async function sendMessage(e){
        e.preventDefault();

        const {uid,photoURL}=auth.currentUser

        await db.collection("message").add({
            text:message,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage("")
    }
  return (
    <div style={styles.box}>
       <form onSubmit={sendMessage}>
            <div style={styles.formCont}>
            <input type="text" style={styles.text} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message...'/>
            <button style={styles.btn} type="submit"><img style={styles.icon} src={sent} alt=""/></button>
            </div>
       </form>
    </div>
  )
}

export default SendMessage
