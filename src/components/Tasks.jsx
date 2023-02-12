import React, { useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import correct from '../images/correct.png';
import change from '../images/change.png';
import manager from '../images/manager.png'
import chatIcon from '../images/chat.png'
import 'reactjs-popup/dist/index.css';
import Signin from './Signin';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase1';
import Chat from './Chat';
import deleteicon from '../images/delete.png';
import close from '../images/close.png';

const styles={
    // task:{
    //     height:"600px"
    // },
    content:{
        marginTop:"100px",
        display:"flex"
    },
    btn:{
      width:"60px",
      backgroundColor:"grey",
      position:"relative",
      top:"-2px",
      color:"white"
    },
    low:{
      border:"1px solid grey",
      width:"800px",
      height:"400px",
    },
    adding:{
     height:"80px",
     width:"800px"
    },
    high:{
      position:"relative",
      left:"50px",
      top:"20px",
    },
    th:{
      textAlign:"center",
      border:"1px solid grey",
      position:"relative",
      // top:"-350px"
    },
    td:{
      textAlign:"center",
      border:"1px solid grey",
      fontSize:"1rem"
    },
    tr:{
      border:"1px solid grey",
    },
    image:{
      width:"40px",
      height:"40px",
      position:"relative",
      top:"-2px",
      cursor:"pointer"
    },
    manage:{
      width:"37px",
      height:"37px",
      position:"relative",
      top:"-2px",
      cursor:"pointer",
      borderLeft:"2px solid grey",
    },
    heading:{
      position:"relative",
      top:"50px",
      left:"45px"
    },
    to:{
      position:"relative",
      left:"380px",
      top:"15px",
      height:"50px"
    },
    front:{
      display:"flex",
      flexDirection:"row"
    },
    ichat:{
      width:"80px",
      height:"80px",
      position:"relative",
      left:"380px",
      top:"470px",
      cursor:"pointer"
    },
    modal:{
      width:"300px",
      height:"500px",
      top:"40px",
      left:"75px",
      right:0,
      bottom:0,
      position:"relative",
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19)",
      borderRadius:"15px",
      backgroundColor:"#c0c2c4",
      transitionDelay:"550ms",
      transitionProperty:"margin-top",
      transitionTimingFunction:"ease"
    },
    modalContent:{
      position:"relative",
      top:"20px",
      lineHeight:"1.4",
      padding:"14px 28px",
      color:"black",
    },
    close:{
      position:"relative",
      left:"228px",
      top:"-20px",
      cursor:"pointer"
    },
    delete:{
      cursor:"pointer"
    }
}

const getLocal=()=>{
  let list=localStorage.getItem("task");
  if(list){
    return (list=JSON.parse(localStorage.getItem("task")));
  }
  else{
    return [];
  }
};

function Tasks() {
    const[message,setMessage]=useState("");
    const[mail,setMail]=useState("");
    const[due,setDue]=useState("");
    const[status,setStatus]=useState("Pending...");
    const[taskList,setList]=useState(getLocal());
    const [completedTaskCount, setCompletedTaskCount] = useState(false);
    const[modal,setModal]=useState(false);
    const[isdelete,setIsDelete]=useState(false);
    const [user]=useAuthState(auth);
    
    const toggleModal=()=>{
      setModal(!modal)
    }
    useEffect(()=>{
       localStorage.setItem("task", JSON.stringify(taskList));
    },[taskList]);

    function addTask(){
        const id = taskList.length;
        setList((prev) => [
          ...prev,
          {
            id: id,
            task: message,
            assignee:mail,
            due:due,
            status:status,
            completedTaskCount:completedTaskCount,
            isdelete:isdelete
          },
        ]);
        setMessage("");
        setMail("");
        setDue("");
        setStatus("Pending...");
        setCompletedTaskCount(false);
        setIsDelete(false);
       };
    
  

      const handleSubmit=(id)=>{
        const newTodos = [...taskList];
        newTodos[id].status="Task Done!"
        console.log(newTodos);
        setList(newTodos);
      }

      const completeTodo = (id) => {
        const newTodos = [...taskList];
        newTodos[id].due = "Complete";
        newTodos[id].status="To be Reviewed!"
        console.log(newTodos);
        setList(newTodos);
      };
     
      const removeTodo=(id)=>{
        const newTodos=[...taskList];
        newTodos.splice(id,1);
        setList(newTodos);
      };
      
  return (
    <div>
      
    <h3 style={styles.heading}>List of Tasks</h3>
    <div style={styles.front}>  
    <div style={styles.task}>

        <div style={styles.content}>
        <input
        style={styles.input}
        value={message} 
        onInput={(e)=>setMessage(e.target.value)}
        type="text"
        id="message"
        placeholder='Add Task'
        name="message"
        class="ml-5 p-2"
        />
        <input
        style={styles.input}
        value={mail} 
        onInput={(e)=>setMail(e.target.value)}
        type="email"
        id="email"
        placeholder='Add Assignee'
        name="email"
        class="ml-2 p-2"
        />

      <select class="ml-2" value={due} onChange={(e)=>setDue(e.target.value)}>
        <option value="Due Date">Due Date</option>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="Day After">Day After</option>
      </select>
       <button type="button" style={styles.btn} class="btn btn-outline-secondary ml-3 w-8 p-2 rounded-0" onClick={()=>addTask()}>Add</button>       
        </div>

        <div style={styles.high}>

        {
          taskList.length===0 ? 
          <Table bordered style={styles.adding}>
          <thead>
          <tr style={styles.tr}>
            <th style={styles.th}>To be Done</th>
            <th style={styles.th}>Task Name</th>
            <th style={styles.th}>Assignee</th>
            <th style={styles.th}>Due Date</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Remove</th>
          </tr>
          <h6 style={styles.to}>Add Tasks....</h6>
          </thead>
          </Table>
          :
          <Table bordered style={styles.low}>
        <thead>
        <tr style={styles.tr}>
          <th style={styles.th}>To be Done</th>
          <th style={styles.th}>Task Name</th>
          <th style={styles.th}>Assignee</th>
          <th style={styles.th}>Due Date</th>
          <th style={styles.th}>Status</th>
          <th style={styles.th}>Remove</th>
        </tr>
        </thead>
        {
        taskList.map((todo,index) => {
        return (
          <tbody>
            <tr style={styles.tr}
            complete={todo.completedTaskCount}
            status={todo.status}
            id={todo.id}
            index={index}
            key={index}
            delete={todo.isdelete}>  
              <td style={styles.td}>
                 {todo.due!=="Complete" ? 
              <img style={styles.image} id="image" 
              onClick={()=>{completeTodo(index)}}
              src={correct} alt=""/>  
               : <img style={styles.image} id="image" src={change} alt=""/> 
              }

              <img style={styles.manage} class="ml-1" src={manager} 
              onClick={()=>{ handleSubmit(index)}} 
                alt=""/>
              </td>

              <td style={styles.td}>{todo.task}</td>
              <td style={styles.td}>{todo.assignee}</td>
              <td style={styles.td}>{todo.due}</td>
              <td style={styles.td}>{todo.status}</td>
              <td style={styles.td}><img onClick={()=>removeTodo(index)} src={deleteicon} alt="" style={styles.delete}/></td>
              
            </tr>
            </tbody>
          )
        })}
      </Table>

        }  
    </div>    
    </div>

  <img src={chatIcon} onClick={toggleModal} style={styles.ichat} alt=""/>
  {modal && (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
      <img style={styles.close} src={close} alt="" onClick={toggleModal}/>
        {user ? <Chat/>:<Signin/>}
        {/* <button onClick={toggleModal}>Send</button> */}
      </div>
    </div>
  )}

    
    </div>
    </div>
  )
}

export default Tasks