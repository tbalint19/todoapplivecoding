import produce from "immer"

export const withRename = produce((dashboards, id, title) => {
  const toEdit = dashboards.find(dashboard => dashboard.id === id)
  toEdit.title = title
})
