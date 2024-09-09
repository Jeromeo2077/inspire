import { AppState } from "../AppState.js";
import { toDoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class ToDoController {
  constructor() {
    console.log('ToDoController has loaded');

    AppState.on('user', this.getToDoList)


  }

  async getToDoList() {
    try {
      await toDoService.getToDoList()
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
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
}
