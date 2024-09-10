import { setHTML } from "../utils/Writer.js";

export class TimeController {
  constructor() {
    console.log('TimeController has loaded');

    this.getTime()
    this.setTimer()
  }

  getTime() {
    const time = new Date()
    const currentTime = time.toLocaleTimeString()
    // console.log(currentTime)

    let currentTimeHTML = ''

    currentTimeHTML = `
    <div>${currentTime}</div>
    `
    setHTML('time', currentTimeHTML)
  }

  setTimer() {
    const interval = setInterval(this.getTime, 1000)
  }

}