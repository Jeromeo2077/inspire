import { AppState } from "../AppState.js";
import { toDoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ToDoController {
  constructor() {
    console.log('ToDoController has loaded');

    AppState.on('user', this.getToDoList)
    AppState.on('toDoList', this.drawToDoList)

  }

  async getToDoList() {
    try {
      await toDoService.getToDoList()
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }


  drawToDoList() {
    const todolist = AppState.toDoList

    let todolistHTML = ''

    todolist.forEach(todo => todolistHTML += todo.myToDoListItemHTMLTemplate)

    setHTML('my-todo-list', todolistHTML)

    const completedToDos = AppState.toDoList.filter(todo => todo.completed)
    setHTML('todo-count', `${completedToDos.length}/${AppState.toDoList.length}`)

  }


  async createToDo() {
    try {
      event.preventDefault()
      const todoForm = event.target
      console.log('ToDoController has Received the following: ', todoForm);

      const todoFormData = getFormData(todoForm)

      console.log('ToDoController has Sent the following: ', todoFormData);

      toDoService.createToDo(todoFormData)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async deleteToDo(Id) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you would like to delete this ToDo?')

      if (!wantsToDelete) return

      await toDoService.deleteToDo(Id)

    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async completeToDo(Id) {
    try {
      await toDoService.completeToDo(Id)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }

  }
}
