export class ToDo {
  constructor(data) {
    this.creatorId = data.creatorId
    this.description = data.description
    this.completed = data.completed || false
  }
}