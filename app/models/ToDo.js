export class ToDo {
  constructor(data) {
    this.creatorId = data.creatorId
    this.description = data.description
    this.completed = data.completed || false
    this.id = data.id || ''
  }

  get myToDoListItemHTMLTemplate() {
    return `
    <div class="m-1 d-flex">
          <p>${this.description}<i onclick="app.ToDoController.deleteToDo('${this.id}')" class="mdi mdi-close-thick text-danger delete-icon" title="Delete ToDo" role="button"></i><input onchange="app.ToDoController.completeToDo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}></p>
      </div>
    `
  }
}