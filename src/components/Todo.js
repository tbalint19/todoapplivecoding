import { useState } from "react"
import { useInput } from "../hooks/useInput"

const Todo = ({ todo, deleteTodo, updateTodo }) => {

  const [ isEdited, setIsEdited ] = useState(false)
  const { reset: resetTitle, ...title } = useInput("")
  const { reset: resetDesc, ...desc } = useInput("")

  const toggle = () => {
    setIsEdited(!isEdited)
    resetTitle(todo.title)
    resetDesc(todo.description)
  }

  const update = () => {
    updateTodo(todo.id, title.value, desc.value)
    toggle()
  }

  return (
    <article>
      { isEdited ?
        <div>
          <input { ...title }/>
          <input { ...desc } />
          <button onClick={toggle}>Cancel</button>
          <button onClick={update}>Edit</button>
        </div> :
        <div>
          <h3>{ todo.title }</h3>
          <p>{ todo.description }</p>
          <button onClick={toggle}>Edit</button>
        </div>
      }
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </article>
  )
}

export default Todo
