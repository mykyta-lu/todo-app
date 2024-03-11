import React from "react"
import {useState, useEffect} from "react"

const App = () => {

  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])

  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setTaskList([...taskList, task])
  }

  const handleDeleteTask = (task) => {
    setTaskList(taskList.filter(el => el !== task))
  }

  return (<main>
    <div className="w-full mt-[64px] md:w-[468px] md:mt-[128px] mx-auto bg-blue-200 px-4 py-6 rounded-md">
      <h1 className="font-sans font-extrabold mb-4 text-xl lowercase">do it tomorrow:</h1>
      <form 
        onSubmit={handleFormSubmit}
        className="flex justify-center gap-2"
      >
        <input 
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="new task" 
          className="w-full rounded-sm h-8 mb-2 p-1" 
        /> 
        <button className="bg-blue-500 w-[84px] h-8 rounded-sm hover:bg-blue-700 active:bg-blue-900 text-white"> {`->`} </button>
      </form>
      <div className="bg-white w-full h-[2px] rounded-lg my-4"></div>
      <ul className="pl-4">
        {taskList.length == 0 
          ? "" 
          : taskList.map(el => {
            return <li 
                      className="flex justify-between hover:bg-white p-1 rounded-sm" 
                      key={taskList.indexOf(el)}
                    >{el}<button onClick={() => handleDeleteTask(el)}>X</button></li>
            })
        }
      </ul>
      <div className="bg-white w-full h-[2px] rounded-lg my-4"></div>
      <div className="flex justify-between mt-4">
        {taskList.length == 0 ? <p>add your first task</p> : <p>{taskList.length} {taskList.length == 1 ? "task" : "tasks"} left to do</p>}
        <button onClick={() => setTaskList([])}>clear all</button>
      </div>
    </div>
  </main>)
}

export default App