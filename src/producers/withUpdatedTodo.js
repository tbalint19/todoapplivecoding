export const withUpdatedTodo = (dashboards, dashboardId, todoId, title, description) =>
  dashboards.map(d => d.id === dashboardId ? { ...d, todos: d.todos.map(t => t.id === todoId ? { ...t, title, description } : t) } : { ...d })
