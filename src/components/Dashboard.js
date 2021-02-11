import { useState } from 'react'
import { useInput } from '../hooks/useInput'
import Todo from './Todo'

const Dashboard = ({ dashboard, deleteDashboard, renameDashboard, addTodo, deleteTodo, updateTodo }) => {

  const [ isEdited , setIsEdited ] = useState(false)
  const { reset: resetDashBoard, ...dashboardTitle } =  useInput(dashboard.title)

  const [ todoFormShown, setTodoFormShown ] = useState(false)
  const { reset: resetTitle, ...todoTitle } = useInput("")
  const { reset: resetDescription, ...todoDescription } = useInput("")

  const toggle = () => {
    setIsEdited(!isEdited)
    resetDashBoard(dashboard.title)
  }

  const toggleTodoCreator = () => {
    setTodoFormShown(!todoFormShown)
    resetTitle()
    resetDescription()
  }

  const save = () => {
    renameDashboard(dashboard.id, dashboardTitle.value)
    toggle()
  }

  const saveTodo = () => {
    addTodo(dashboard.id, todoTitle.value, todoDescription.value)
    toggleTodoCreator()
  }

  const deleteTodoFromDashboard = (todoId) => {
    deleteTodo(dashboard.id, todoId)
  }

  const updateTodoInDashboard = (todoId, title, desc) => {
    updateTodo(dashboard.id, todoId, title, desc)
  }

  return (
    <section key={dashboard.id}>
      { isEdited ?
        <input { ...dashboardTitle } /> :
        <h2>{ dashboard.title }</h2> }
      <button onClick={toggle}>{ isEdited ? "Cancel" : "Edit" }</button>
      { isEdited && <button onClick={save}>Save</button> }
      { dashboard.todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodoFromDashboard}
          updateTodo={updateTodoInDashboard}/>
      ) }
      <button onClick={() => deleteDashboard(dashboard.id)}>Delete</button>
      { todoFormShown ?
        <div>
          <input { ...todoTitle } />
          <input { ...todoDescription } />
          <button onClick={toggleTodoCreator}>Cancel</button>
          <button onClick={saveTodo}>Add todo</button>
        </div> :
        <button onClick={toggleTodoCreator}>New todo</button>
      }

    </section>
  );
}

export default Dashboard;
