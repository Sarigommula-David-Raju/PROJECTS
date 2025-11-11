import React, {useState, useCallback} from 'react';
import {Link} from 'react-router-dom';

export default function Todo(){
    const [task, setTask] = useState('');
    const [taskList, setTaskList]=useState([]);
    const [updateTask, setUpdatetask]=useState('');

    //Style
    const btn_style={
        border:'none',
        height:'35px',
        width:'50px',
        margin:'2px 5px',
        borderRadius:'5px',
        color:'white',
        fontWeight:'bold',
        backgroundColor:'black'
    }

    const btnclr_style={
        border:'none',
        height:'35px',
        width:'100px',
        margin:'5px 5px',
        borderRadius:'5px',
        color:'white',
        fontWeight:'bold',
        backgroundColor:'black'
    }
    const input_style={
        outline:'none',
        borderRadius:'0px 5px',
        border:'none',
        boxShadow:'1px 1px 1px grey',
        height:'30px',
        lineHeight:'100%'
    }
   
    const item_style={
        width:'160px',
        fontWeight:'bold',
        
    }
    const main_style={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',   
        
    }
    const container={
        border:'1px solid purple',
        padding:'10px 50px 100px',
        boxShadow:'2px 2px 2px grey',
        borderRadius:'0 30px',
        margin:'10px'
        
    }



    //ADD TASK
     const addTask=()=>{
        if(task===""){
            return;
        }
        setTaskList([...taskList,task]);
        setTask("");
    }

    const addItemOnEnter=(e)=>{
        if(e.key==="Enter"){
        setTaskList([...taskList, task]);
        setTask("");
        }
        
    }

    //EDIT TASK
    const editTask=(index)=>{
        const update = prompt("Enter new task");
        if(update===null){ return }
        if(update ===""){
            alert("Please enter task to update");
        }else{
            
            setUpdatetask(update);
            taskList[index]=update;
        }
        
    }

    const clearTasks=()=>{
        setTaskList([]);
    }


    //DELETE TASK
    // const deleteTask=(index)=>{
    //     setTaskList([...taskList.slice(0,index), ...taskList.slice(index+1)]);

    // }

    return (
        <div style={main_style}>
            
            <div style={container}>
        
            <h2><Link to="/" style={{textDecoration:'none'}}>◀</Link> Todo App</h2>
            <div className='input-field'>

                <input type='text' 
                placeholder='Enter your task here...' 
                value={task} 
                onChange={(e)=>{setTask(e.target.value)}} 
                onKeyDown={(e)=>{addItemOnEnter(e)}}
                style={input_style}/> 

                <button onClick={addTask}  style={btn_style}>ADD</button>
                <button onClick={clearTasks}  style={btnclr_style}>CLEAR ALL</button>
                
            </div>
            <div className='task-list'>
                <table>
                    {taskList.map(
                        (item, index)=>{
                            return(
                                <tr key={index} > 
                                <td style={item_style}> {item} </td> 
                                 <td >
                                     <button style={btn_style} onClick={()=>{setTaskList([...taskList.slice(0,index), ...taskList.slice(index+1)])}} >X</button>
                                 </td>
                                 <td>
                                    <button style={btn_style} onClick={()=>{editTask(index)}} >EDIT</button>
                                 </td>
                                  </tr>
                            )
                        }
                    )}
                </table>
            </div>
            
            </div>
                    
        </div>
    )
}