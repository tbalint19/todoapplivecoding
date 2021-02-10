import produce from "immer"

export const withoutDashboard = produce((dashboards, id) => {
  const index = dashboards.findIndex(dashboard => dashboard.id === id)
  if (index !== -1) dashboards.splice(index, 1)
})
