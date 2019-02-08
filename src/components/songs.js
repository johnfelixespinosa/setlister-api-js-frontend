class Songs {
  constructor() {
    this.songs = []
    this.adapter = new SongsAdapter()
    this.initBindingsEventListeners()
    this.fetchAndLoadSongs()
  };

  initBindingsEventListeners() {
    this.songsContainer = document.getElementById('songs-container')
    this.newSongTitle = document.getElementById('new-song-title')
    this.songsForm = document.getElementById('new-song-form')
    this.songsForm.addEventListener('submit', this.createSong.bind(this))
  };

  createSong(e) {
    e.preventDefault()
    const value = this.newSongTitle.value

    this.adapter.createSong(value).then(song => {
      this.songs.push(new Song(song))
      this.render() 
    })
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