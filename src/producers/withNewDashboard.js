import Dashboard from '../models/Dashboard'

export const withNewDashboard = (dashboards, title) =>
  [ ...dashboards, new Dashboard(title) ]
