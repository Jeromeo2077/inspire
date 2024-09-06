import { AppState } from "../AppState.js";
import { BackgroundImages } from "../models/BackgroundImages.js";
import { api } from "./AxiosService.js";

class BackgroundImagesService {

  async getBackgroundImages() {
    const response = await api.get('api/images')
    console.log('Background Images Received by BackgroundImagesService', response.data);

    const newBackgroundImage = new BackgroundImages(response.data)
    AppState.backgroundImage = newBackgroundImage
  }


}

export const backgroundImagesService = new BackgroundImagesService()