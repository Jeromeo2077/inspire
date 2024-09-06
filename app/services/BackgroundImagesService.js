import { api } from "./AxiosService.js";

class BackgroundImagesService {

  async getBackgroundImages() {
    const response = await api.get('api/images')
    console.log('Background Images Received by BackgroundImagesService', response.data);

  }


}

export const backgroundImagesService = new BackgroundImagesService()