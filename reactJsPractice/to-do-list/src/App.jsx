import { useState } from 'react'


function App() {
  const [textInput, settextInput] = useState('')
  const [tasks, setTasks] = useState([])
  

  const addTask = () => {
    if (textInput.trim() !== '') {
      setTasks([...tasks, textInput])
      settextInput('')
    }
  }


 
  return (
    <>
      <div>
        <h1>To-Do-List</h1>
        <br />
        <input type='text' placeholder='Enter You task....' value={textInput} onChange={(e) => settextInput(e.target.value)} />
        {editIndex === null ? (
          <button onClick={addTask}>Add</button>
        ) : (
          <button onClick={updateTask}>Update</button>
        )}

        
      </div>
    </>
  )
}

export default App
