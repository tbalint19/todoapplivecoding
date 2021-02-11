import BaseModel from './BaseModel'

export default class Todo extends BaseModel {
  constructor(title, description) {
    super(title)
    this.description = description
  }
}
