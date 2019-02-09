class Song {
  constructor(songJSON) {
    this.id = songJSON.id
    this.title = songJSON.title
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.title}</li>`
  }
}