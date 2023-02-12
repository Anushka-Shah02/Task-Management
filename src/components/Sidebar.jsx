import React from 'react'
// import add from '../images/plus.png'
import mytask from '../images/mytask.png'
import inbox from '../images/inbox.png'
import home from '../images/home.png'
import  training from '../images/training.png'
import reporting from '../images/reporting.png'
import portfolio from '../images/portfolio.png'
import goals from '../images/goals.png'
import tobe from '../images/tobe.png'
import { Link } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CDropdown,CDropdownItem,CButton,CDropdownToggle,CDropdownMenu } from '@coreui/react';
import './Sidebar.css';

const styles={
    sidebar:{
        backgroundColor:"#f7f6f2",
        width:"240px",
        border:"1px solid #d8e6db",
        height:"670px"
    },
    content:{
        padding:"40px",
        margin:"7px",
        left:"-15px",
        position:"relative",
        top:"-40px",
        fontSize:"1.2rem",
        fontWeight:"400"
    },
    head:{
        margin:"15px",
        color:"#46484a"
    },
    btn:{
       marginTop:"30px",
       marginLeft:"45px",
       cursor:"pointer"
    },
    icons:{
      width:"25px",
      height:"25px",
      marginRight:"5px"
    },
    main:{
      position:"relative",
      left:"15px",
      top:"7px",
    },
    links:{
      display:"flex",
      flexDirection:"column",
      marginTop:"10px"
    },
    part:{
      marginTop:"7px",
    },
    tags:{
      textDecoration:"none",
      color:"#46484a",
      margin:"4px",
      marginLeft:"19px",
      marginTop:"8px",
      fontSize:"1.2rem",
      cursor:"pointer"
    },
    tagged:{
      marginTop:"7px",
      textDecoration:"none",
      color:"#46484a",
      margin:"8px",
      marginLeft:"16px",
      fontSize:"1.2rem",
      cursor:"pointer"
    },
    side:{
      display:"flex",
      flexDirection:"column",
      marginBottom:"12px"
      // cursor:"pointer"
    },
    todo:{
      textDecoration:"none",
      color:"#46484a",
      marginLeft:"38px",
      cursor:"pointer",
      fontWeight:"600",
      marginTop:"5px"
    },
    split:{
      borderBottom:"1px solid #c9c7bf",
      width:"150px"
    }
}
export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      
    {/* <button style={styles.btn}><img src={add} alt="" />Create</button> */}

    <CDropdown style={styles.btn} variant="btn-group" direction="dropend">
    <CButton color="secondary" >Create</CButton>
    <CDropdownToggle color="secondary" split/>
    <CDropdownMenu>
      <CDropdownItem href="/"><img style={styles.icons} src={mytask} alt=""/>Task</CDropdownItem>
      <CDropdownItem href="/"><img style={styles.icons} src={goals} alt=""/>Project</CDropdownItem>
      <CDropdownItem href="/"><img style={styles.icons} src={inbox} alt=""/>Message</CDropdownItem>
    </CDropdownMenu>
     </CDropdown>

    <div style={styles.content}>
    <div style={styles.split}>
    <div style={styles.head}><img style={styles.icons} src={home} alt=""/>Home</div>
    <div style={styles.head}><img style={styles.icons} src={mytask} alt=""/>My Tasks</div>
    <div style={styles.head}><img style={styles.icons} src={inbox} alt=""/>Inbox</div>
    </div>

    <div style={styles.split}>
    <h4 style={styles.main}>Projects</h4>
    <a style={styles.tagged} href="/"><img style={styles.icons} src={training} alt=""/>Training</a>
    
    <div style={styles.side}>
    <Link to="/" style={styles.todo} onMouseOver={(e)=>e.target.style.color="#4699f2"} onMouseOut={(e)=>e.target.style.color="#46484a"}><img src={tobe} alt=""/>List</Link>
    <Link to="/board" onMouseOver={(e)=>e.target.style.color="#4699f2"} onMouseOut={(e)=>e.target.style.color="#46484a"} style={styles.todo}><img src={tobe} alt=""/>Board</Link>
    </div>
    </div>
    
    <div style={styles.part}>
    <h4 style={styles.main}>Insights</h4>
    <div style={styles.links}>
    <a style={styles.tags} href="/"><img style={styles.icons} src={reporting} alt=""/>Reporting</a>
    <a style={styles.tags} href="/"><img style={styles.icons} src={portfolio} alt=""/>Portfolio</a>
    <a style={styles.tags} href="/"><img style={styles.icons} src={goals} alt=""/>Goals</a>
    </div>
    </div>
    </div>
    </div>
  )
}
