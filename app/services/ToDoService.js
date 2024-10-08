import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js"

class ToDoService {

  async createToDo(todoFormData) {

    console.log('New ToDo Form Data Received by ToDoService', todoFormData);

    const newToDo = new ToDo(todoFormData)
    const response = await api.post('api/todos', newToDo)

    console.log('New ToDo Form Data Sent by ToDoService', newToDo);

    const newToDoList = new ToDo(response.data)
    AppState.toDoList.push(newToDoList)

    AppState.emit('toDoList')
  }

  async deleteToDo(Id) {
    const response = await api.delete(`api/todos/${Id}`)

    const todoIndex = AppState.toDoList.findIndex(todo => todo.id == Id)
    AppState.toDoList.splice(todoIndex, 1)
  }

  async completeToDo(Id) {
    const todolist = AppState.toDoList
    const todoIndex = todolist.findIndex(todo => todo.id == Id)
    const todo = todolist[todoIndex]
    const todoData = { completed: !todo.completed }
    const response = await api.put(`api/todos/${Id}`, todoData)
    console.log('Completed:', response.data);
  }


  async getToDoList() {

    const response = await api.get('api/todos')
    console.log('ToDoList Received by ToDoService', response.data);

    const todo = response.data.map(todo => new ToDo(todo))
    AppState.toDoList = todo
  }

}

export const toDoService = new ToDoService()