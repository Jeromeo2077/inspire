export class ToDo {
  constructor(data) {
    this.creatorId = data.creatorId
    this.description = data.description
    this.completed = data.completed || false
  }

  get myToDoListItemHTMLTemplate() {
    return `
    <div class="my-1 d-flex">
          <p>Description: ${this.description}</p>
      </div>
    `
  }
}