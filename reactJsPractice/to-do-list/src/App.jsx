import { useState } from 'react'


function App() {
  const [textInput, settextInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const addTask = () => {
    if (textInput.trim() !== '') {
      setTasks([...tasks, textInput])
      settextInput('')
    }
  }


  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1)
    setTasks(newTasks)
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

        <div>
          {
            tasks.map((task, index) => (
              <>

                <table border={2}>
                  <tr>
                    <td key={index} className='text-td'>{task}</td>
                    <td>
                      <button onClick={() => deleteTask(index)}>Delete</button>
                    </td>
                    <td>
                      <button onClick={() => editTask(index)}>Edit</button>
                    </td>
                  </tr>
                </table>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
