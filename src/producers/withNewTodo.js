import Todo from '../models/Todo'

export const withNewTodo = (dashboards, id, title, description) =>
  dashboards.map(d => d.id === id ? { ...d, todos: [ ...d.todos, new Todo(title, description) ]} : d)
