import { AppState } from "../AppState.js";
import { backgroundImagesService } from "../services/BackgroundImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class BackgroundImagesController {
  constructor() {
    console.log("BackgroundImagesController Loaded");

    AppState.on('backgroundImage', this.drawBackgroundImage)

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

  drawBackgroundImage() {
    const backgroundImage = AppState.backgroundImage

    setHTML('background-image-html', backgroundImage.backgroundImagesTemplate)

  }

}
