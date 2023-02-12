import React,{useRef, useState} from 'react'
import { useEffect } from 'react';
import { auth, db } from '../firebase1';
import SendMessage from './SendMessage';
// import Signout from './Signout'
import './Chat.css';

const styles={
  para:{
     fontSize:"1.3rem",
     marginLeft:"12px",
     marginTop:"10px"
  },
  chat:{
    display:"flex",
    height:"50px"
  },
  chatImg:{
    borderRadius:"50%",
    width:"50px",
    height:"50px",
    position:"relative",
    left:"-4px"
  },
  boxScroll:{
    overflowY:"scroll",
    height:"420px",
    position:"relative",
    left:"27px",
    top:"-15px",
  }
}
function Chat() {
  const[messages,setMessages]=useState([]);
  const scroll=useRef();
  useEffect(()=>{
    db.collection("message").orderBy("createdAt").limit(50).onSnapshot(snapshot=>{
       setMessages(snapshot.docs.map(doc=>doc.data()))  
    })
  },[])

  return (
      <div>
      <div>
     <section>
     <div style={styles.boxScroll}>
      {messages.map(({id,text,photoURL,uid})=>{
       return(
         <div key={id} 
         className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
         <div style={styles.chat}>
         {/* <img style={styles.chatImg} src={photoURL} alt=""/> */}
         <p style={styles.para}>{text}</p>
         </div>

         </div>  
       )}
       )
      }
      </div>
      </section>
      <SendMessage scroll={scroll}/>
      {/* <div ref={scroll}></div> */}
      {/* <Signout/> */}
      </div>
   </div>
    
    
  )
}

export default Chat
