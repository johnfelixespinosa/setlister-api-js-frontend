class Songs {
  constructor() {
    this.songs = []
    this.adapter = new SongsAdapter()
    this.initBindingsEventListeners()
    this.fetchAndLoadSongs()
  };

  initBindingsEventListeners() {
    this.songsContainer = document.getElementById('songs-container')
    this.songsForm = document.getElementById('new-song-form')
    this.songsForm.addEventListener("submit", this.createSong)
  };

  createSong() {
    console.log('song is being created')
  }

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
    this.songsContainer.innerHTML = this.songs.map(song => song.renderLi()).join('')
  };
}