import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import todo from '../images/todo.png'
import doing from '../images/doing.png'
import done from '../images/done.png'
import edited from '../images/edit.png'
import add from '../images/add.png'
const styles={
   flow:{
    display:"flex",
    flexDirection:"row",
    marginLeft:"80px"
   },
   section1:{
    height:"460px",
    width:"340px",
    overflowY:"scroll",
    marginTop:"10px",
    marginLeft:"40px",
    border:"1px solid #ebedf0"
   },
   card1:{
    margin:"8px",
    boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 7px 0 rgba(0, 0, 0, 0.19)"
   },
   cardHead:{
    fontSize:"1.2rem",
    fontWeight:"600",
    marginLeft:"50px",
    marginTop:"80px"
   },
   cardText:{
    display:"flex"
   },
   heading:{
    position:"relative",
    top:"40px",
    left:"45px"
  },
  extra:{
    display:"flex",
    flexDirection:"row"
  },
  edit:{
    position:"absolute",
    height:"30px",
    width:"30px",
    cursor:"pointer",
    top:"5px",
    left:"270px"
  },
  btn:{
    backgroundColor:"transparent",
    border:"0px solid lightgray",
    position:"relative",
    left:"-30px",
    top:"-3px"
  },
  icon:{
    height:"20px",
    width:"20px"
  },
  formEdit:{
    display:"flex"
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

function Board() {
  const[taskList,setList]=useState(getLocal());

  const[isEditing,setIsEditing]=useState(false);
  const[edit,setEdit]=useState("");
  const[editId,setEditId]=useState(null);

  const handleEdit=(id)=>{
     const editItem=taskList.find((item)=>item.id===id);
     if(editItem.id===id)
     {
      setIsEditing(true);
      setEdit(editItem.task);
      setEditId(id);
     }else{
      setIsEditing(false);
      setEdit("");
      setEditId(null);
     }
  }

  
  const editMessage=(e)=>{
    e.preventDefault();
    if(isEditing && edit)
    {
      setList(
        taskList.map((item)=>{
          if(item.id===editId)
          {
            return{...item,task:edit}
          }
          return item;
        })
      )
      console.log(edit);
      setIsEditing(false);
      setEdit("");
      setEditId(null);
    }
  }

  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(taskList));
 },[taskList]);

  return (
    <div>
      <h3 style={styles.heading}>Board View</h3>
    <div style={styles.flow}>
      
      <div style={styles.part1}>
      <div style={styles.cardHead}><img class="mr-2" src={todo} alt=""/>To be Done</div>
      <div style={styles.section1}>
      {
        taskList.map((todo,index)=>{
          return(
            <div>
              <div>
              {
              todo.due!=="Complete" &&
                <Card style={styles.card1}>
                <div key={todo.id} style={styles.extra}>  
                <Card.Body id={todo.id}>
                <div style={styles.cardText}><h5 class="mr-1">Task:</h5>
                {isEditing ?<Card.Text>
                  <form onSubmit={editMessage} style={styles.formEdit}>
                  <input type="text" value={edit} onInput={(e)=>setEdit(e.target.value)} name="edit" placeholder='Add Task'/>
                  <button style={styles.btn} type="submit"><img style={styles.icon} src={add} alt=""/></button>
                  </form>
                  
                  </Card.Text> :<Card.Text>{todo.task}</Card.Text>}</div>
                <div style={styles.cardText}><h5 class="mr-1">Assignee:</h5><Card.Text>{todo.assignee}</Card.Text></div>
                <div style={styles.cardText}><h5 class="mr-1">Due:</h5><Card.Text>{todo.due}</Card.Text></div>
                <div style={styles.cardText}><h5 class="mr-1">Status:</h5><Card.Text>{todo.status}</Card.Text></div>

                <Card.Img src={edited} style={styles.edit} onClick={()=>handleEdit(todo.id)} alt=""/>
                </Card.Body>
                </div>
               </Card>
              }
            </div>
            </div>  
          )
        })
      }
      </div>
      </div>

         <div style={styles.part1}>
         <div style={styles.cardHead}><img class="mr-2" src={doing} alt=""/>Doing</div>
         <div style={styles.section1}>
          {
            taskList.map((todo)=>{
               return(
                <div>
                  {todo.due==="Complete" && todo.status==="To be Reviewed!" && 
                     <Card style={styles.card1}>
                     <Card.Body>
                     <div style={styles.cardText}><h5 class="mr-1">Task:</h5><Card.Text>{todo.task}</Card.Text></div>
                     <div style={styles.cardText}><h5 class="mr-1">Assignee:</h5><Card.Text>{todo.assignee}</Card.Text></div>
                     <div style={styles.cardText}><h5 class="mr-1">Due:</h5><Card.Text>{todo.due}</Card.Text></div>
                     <div style={styles.cardText}><h5 class="mr-1">Status:</h5><Card.Text>{todo.status}</Card.Text></div>
                     </Card.Body>
                    </Card>
                  }
                </div>
               )
            })
          }
         </div>
         </div>
         

        <div style={styles.part1}>
        <div style={styles.cardHead}><img class="mr-2" src={done} alt=""/>Done</div>
         <div style={styles.section1}>
          {
            taskList.map((todo)=>{
              return(
                <div>
                {
                  todo.status==="Task Done!" && 
                  <Card style={styles.card1}>
                  <Card.Body>
                  <div style={styles.cardText}><h5 class="mr-1">Task:</h5><Card.Text>{todo.task}</Card.Text></div>
                  <div style={styles.cardText}><h5 class="mr-1">Assignee:</h5><Card.Text>{todo.assignee}</Card.Text></div>
                  <div style={styles.cardText}><h5 class="mr-1">Due:</h5><Card.Text>{todo.due}</Card.Text></div>
                  <div style={styles.cardText}><h5 class="mr-1">Status:</h5><Card.Text>{todo.status}</Card.Text></div>
                  </Card.Body>
                </Card>
                }
                </div>
              )
            })
          }
         </div>
        </div>
         

      </div>
    </div>
  )
}

export default Board
