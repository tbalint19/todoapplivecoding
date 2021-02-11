export const withoutDashboard = (dashboards, id) =>
  dashboards.filter(dashboard => dashboard.id !== id)
