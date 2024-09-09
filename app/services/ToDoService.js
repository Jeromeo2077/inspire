import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js"

class ToDoService {

  async createToDo(todo) {
    const response = await api.put('api/todos')
    console.log('New ToDo Received by ToDoService', todo);

  }


  async getToDoList() {
    const response = await api.get('api/todos')
    console.log('ToDoList Received by ToDoService', response.data);

    const newToDoList = new ToDo(response.data)
    AppState.toDoList = newToDoList
  }

}

export const toDoService = new ToDoService()