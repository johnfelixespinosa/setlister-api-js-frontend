class Songs {
  constructor() {
    this.songs = []
    this.adapter = new SongsAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadSongs()
  };

  fetchAndLoadSongs() {
    this.adapter
      .getSongs()
      .then(songs => {
        songs.forEach(song => this.songs.push(new Song(song)))
      })
      .then(() => {
        this.render()
      });
  };

  render() {
    const songsContainer = document.getElementById('songs-container')
    songsContainer.innerHTML = "Made it here"
  }
}