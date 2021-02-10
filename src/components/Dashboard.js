import { useState } from 'react'

const Dashboard = ({ dashboard, deleteDashboard, renameDashboard }) => {

  const [ isEdited , setIsEdited ] = useState(false)
  const [ value, setValue ] =  useState("")

  const toggle = () => {
    setIsEdited(!isEdited)
    setValue(dashboard.title)
  }

  const save = () => {
    renameDashboard(dashboard.id, value)
    setIsEdited(false)
  }

  return (
    <section key={dashboard.id}>
      { isEdited ?
        <input value={value} onChange={e => setValue(e.target.value)}/> :
        <h2>{ dashboard.title }</h2> }
      <button onClick={toggle}>{ isEdited ? "Cancel" : "Edit" }</button>
      { isEdited && <button onClick={save}>Save</button> }
      { dashboard.todos.map(todo =>
        <article key={todo.id}>
          <h3>{ todo.title }</h3>
          <p>{ todo.description }</p>
        </article>
      ) }
      <button onClick={() => deleteDashboard(dashboard.id)}>Delete</button>
    </section>
  );
}

export default Dashboard;
