import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { withRename } from './producers/withRename'
import { withNewDashboard } from './producers/withNewDashboard'
import { withoutDashboard } from './producers/withoutDashboard'
import { withNewTodo } from './producers/withNewTodo'
import { withoutTodo } from './producers/withoutTodo'
import { withUpdatedTodo } from './producers/withUpdatedTodo'
import './App.css';

const App = () => {

  const [ dashboards, setDashboards ] = useState([])
  const [ dashboardInput, setDashboardInput ] = useState("")

  const createDashboard = () => {
    setDashboards(withNewDashboard(dashboards, dashboardInput))
    setDashboardInput("")
  }

  const renameDashboard = (id, newTitle) => {
    setDashboards(withRename(dashboards, id, newTitle))
  }

  const deleteDashboard = (id) => {
    setDashboards(withoutDashboard(dashboards, id))
  }

  const addTodo = (dashboardId, title, description) => {
    setDashboards(withNewTodo(dashboards, dashboardId, title, description))
  }

  const deleteTodo = (dashboardId, todoId) => {
    setDashboards(withoutTodo(dashboards, dashboardId, todoId))
  }

  const updateTodo = (dashboardId, todoId, title, desc) => {
    setDashboards(withUpdatedTodo(dashboards, dashboardId, todoId, title, desc))
  }

  return (
    <div>
      <nav>
        <input value={dashboardInput} onChange={(e) => setDashboardInput(e.target.value)} />
        <button onClick={() => createDashboard()}>Create dashboard</button>
      </nav>
      <main>
        { dashboards.map(dashboard =>
          <Dashboard
            key={dashboard.id}
            dashboard={dashboard}
            renameDashboard={renameDashboard}
            deleteDashboard={deleteDashboard}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo} />
        ) }
      </main>
    </div>
  );
}

export default App;
