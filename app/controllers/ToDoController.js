import { AppState } from "../AppState.js";
import { toDoService } from "../services/ToDoService.js";
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


  async createToDo(todo) {
    try {
      await toDoService.createToDo(todo)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }
}
