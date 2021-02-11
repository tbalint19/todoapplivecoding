import BaseModel from './BaseModel'

export default class Dashboard extends BaseModel {
  constructor(title) {
    super(title)
    this.todos = []
  }
}
