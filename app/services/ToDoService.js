import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js"

class ToDoService {

  async createToDo(todoFormData) {

    console.log('New ToDo Form Data Received by ToDoService', todoFormData);

    const newToDo = new ToDo(todoFormData)
    const response = await api.post('api/todos', newToDo)

    console.log('New ToDo Form Data Sent by ToDoService', newToDo);
  }


  async getToDoList() {

    const response = await api.get('api/todos')
    console.log('ToDoList Received by ToDoService', response.data);

    const newToDoList = new ToDo(response.data)
    AppState.toDoList = newToDoList
  }

}

export const toDoService = new ToDoService()