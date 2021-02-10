import produce from "immer"
import Dashboard from "../models/Dashboard"

export const withNewDashboard = produce((dashboards, title) => {
  dashboards.push(new Dashboard(title))
})
