export default class Dashboard {
  constructor(title) {
    this.id = new Date().getTime()
    this.title = title
    this.todos = []
  }
}
