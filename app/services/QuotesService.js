import { AppState } from "../AppState.js";
import { Quotes } from "../models/Quotes.js";
import { api } from "./AxiosService.js";

class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('Quotes Received by QuotesService', response.data);

    const newQuote = new Quotes(response.data)
    AppState.quote = newQuote
  }


}

export const quotesService = new QuotesService