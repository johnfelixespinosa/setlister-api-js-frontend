class Songs {
  constructor() {
    this.songs = []
    this.adapter = new SongsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadSongs()
  };

  fetchAndLoadSongs() {
    this.adapter.getSongs().then(songs => {}).then(() => {
      this.render()
    })
  }

  render() {
    const songsContainer = document.getElementById('songs-container')
    songsContainer.innerHTML = "Made it here"
  }
}