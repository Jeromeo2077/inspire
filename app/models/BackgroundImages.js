export class BackgroundImages {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
  }

  get backgroundImagesTemplate() {
    return /*HTML*/`
          <div>
         <img src="${this.largeImgUrl}" class="background-image">
        </div>`

  }
}
