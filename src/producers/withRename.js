export const withRename = (dashboards, id, title) =>
  dashboards.map(d => d.id === id ? { ...d, title } : { ...d })
