import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
  constructor() {
    console.log('QuotesController has loaded');

    this.getQuotes()

  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error);
      console.log(error);
    }
  }

  drawQuote() {
    const quote = AppState.quote

    let quoteHTML = ''

    quoteHTML = `
    <div>${quote.content}</div>
    <div>${quote.author}</div>

    `

    setHTML('quote', quoteHTML)



  }
}