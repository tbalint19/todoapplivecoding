export const withoutTodo = (dashboards, dashboardId, todoId) =>
  dashboards.map(d => d.id == dashboardId ? { ...d,  todos: d.todos.filter(t => t.id !== todoId) } : d )
