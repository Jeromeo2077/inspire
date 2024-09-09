import { BackgroundImages } from './models/BackgroundImages.js'
import { ToDo } from './models/ToDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {BackgroundImages} */
  backgroundImage = null

  /**@type {ToDo[]} */
  toDoList = []

  /**@type {ToDo} */
  todo = null
}

export const AppState = createObservableProxy(new ObservableAppState())