import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuotesController {
  constructor() {
    console.log('QuotesController has loaded');

  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error);
      console.log(error);
    }
  }
}