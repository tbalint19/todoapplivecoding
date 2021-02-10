import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { withRename } from './producers/withRename'
import { withNewDashboard } from './producers/withNewDashboard'
import { withoutDashboard } from './producers/withoutDashboard'
import './App.css';

import { initialState } from './dummyState'

const App = () => {

  const [ dashboards, setDashboards ] = useState(initialState)
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
            deleteDashboard={deleteDashboard} />
        ) }
      </main>
    </div>
  );
}

export default App;
