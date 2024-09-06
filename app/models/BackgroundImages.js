export class BackgroundImages {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
  }

  getBackgroundImagesTemplate() {
    return /*HTML*/`
style="background-image:
  url('${this.largeImgUrl}');"`
  }
}
