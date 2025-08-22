import { useState } from 'react'
import './App.css'
import Task from './task'

function App() {
  const [tasks, setTask] = useState<string[]>([])
 const [newtask, setNewTask] = useState<string>("")
 const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false)

 function handleAddTask(){
  if(newtask.trim() == "") {
    setIsInputEmpty(true)
    return
  }
    setTask([...tasks, newtask])
    setNewTask("")
  
 }  
   
 function handleDeleteTask(indexToDelete: number){
  setTask(tasks.filter((_, index) => index !== indexToDelete))
 }  

  return (
    <>
    <div   className="input-task">
    <input 
      placeholder="Enter a task"
      type="text"
      value={newtask}
      onChange={(e) => {setNewTask(e.target.value); setIsInputEmpty(newtask.trim()== "" && newtask.length>0);      }}
    />
    <button onClick={handleAddTask} type="button">Add Task</button>
    </div>
    {isInputEmpty && <p className="error">Task cannot be empty!</p>}

    {tasks.length===0 ? (<p className="no-task">No tasks available. Please add a task.</p>) : (
     
    <div className="task-list">
      <span >Task List :</span>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          deleteTask={() => handleDeleteTask(index)} 
        />
      ))}
    </div>
     )}
    </>
  )
}

export default App
