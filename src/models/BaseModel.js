export default class BaseModel {
  constructor(title) {
    this.id = new Date().getTime()
    this.title = title
  }
}
