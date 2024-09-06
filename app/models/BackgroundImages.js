export class BackgroundImages {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
  }

  get backgroundImagesTemplate() {
    return /*HTML*/`
    <p>Test</p>`
  }
}

