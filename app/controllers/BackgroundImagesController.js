import { backgroundImagesService } from "../services/BackgroundImagesService.js";
import { Pop } from "../utils/Pop.js";

export class BackgroundImagesController {
  constructor() {
    console.log("BackgroundImagesController Loaded");

    this.getBackgroundImages()
  }

  async getBackgroundImages() {
    try {
      await backgroundImagesService.getBackgroundImages()
    } catch (error) {
      Pop.error(error);
      console.log(error);
    }
  }

}
