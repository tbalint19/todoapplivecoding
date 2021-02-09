import { useState } from 'react'
import './App.css';

const initialState = [
  {
    id: 1,
    title: "Lajos bevásárlólistája",
    todos: [
      { id: 2, title: "Aldi", description: "Tej, kenyér"},
      { id: 3, title: "Lidl", description: "Hús"},
    ]
  },
  {
    id: 4,
    title: "Béla bevásárlólistája",
    todos: [
      { id: 5, title: "CBA", description: "Alma, Banán"},
    ]
  },
]

function App() {

  const [ dashboards, setDashboards ] = useState(initialState)
  const [ dashboardInput, setDashboardInput ] = useState("")

  const deleteDashboard = (id) => {
    const newDashboards = dashboards.filter(dashboard => dashboard.id !== id)
    setDashboards(newDashboards)
  }

  const createDashboard = () => {
    const newDashboards = [ ...dashboards, {
      id: new Date().getTime(),
      title: dashboardInput,
      todos: []
    } ]
    setDashboards(newDashboards)
    setDashboardInput("")
  }

  return (
    <div>
      <nav>
        <input value={dashboardInput} onChange={(e) => setDashboardInput(e.target.value)} />
        <button onClick={() => createDashboard()}>Create dashboard</button>
      </nav>
      <main>
        { dashboards.map(dashboard =>
          <section key={dashboard.id}>
            <h2>{ dashboard.title }</h2>
            { dashboard.todos.map(todo =>
              <article key={todo.id}>
                <h3>{ todo.title }</h3>
                <p>{ todo.description }</p>
              </article>
            ) }
            <button onClick={() => deleteDashboard(dashboard.id)}>Delete</button>
          </section>
        ) }
      </main>
    </div>
  );
}

export default App;
