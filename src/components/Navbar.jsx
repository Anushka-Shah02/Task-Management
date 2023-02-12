import React, { useState } from 'react'
import task from '../images/task.png'
import { auth } from '../firebase1'
import firebase from 'firebase/compat/app';
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'

const styles={
  navbar:{
     height:"70px",
     backgroundColor:"#f7f6f2"
  },
  logo:{
    marginLeft:"10px",
    fontSize:"1.8rem",
    fontWeight:"500"
  },
  task:{
    marginLeft:"50px",
    width:"35px",
    height:"35px"
  }
}

function Navbar() {
  const [search,setSearch]=useState("");
  const [user]=useAuthState(auth);
  let filterTask=[];

  filterTask=filterTask.filter((taskList)=>
     taskList.assignee.toLowerCase().includes(search.toLowerCase())
  );
  function signInWithGoogle()
    {
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

  return (
    <div>
       <nav style={styles.navbar} class="navbar navbar-expand-lg">
  <img src={task} alt="" style={styles.task}/>
  <a class="navbar-brand col-md-3" style={styles.logo} href="/">Task Hub</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      <li class="nav-item dropdown">
  
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="/">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 col-md-10">
      <input class="form-control mr-sm-2 col-md-8" type="search" value={search}  onChange={(e) =>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
      {
        filterTask.map((todo)=>{
           return (
             alert(todo)
           )
        })
      }
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <div class="mr-5">
    {user?<button type="button" onClick={()=>auth.signOut() } class="btn btn-success mr-2">SIGN OUT</button>:
    <button type="button" class="btn btn-info mr-2" onClick={signInWithGoogle}>SIGN IN</button>}
  
  </div>
</nav>
    </div>
  )
}

export default Navbar
