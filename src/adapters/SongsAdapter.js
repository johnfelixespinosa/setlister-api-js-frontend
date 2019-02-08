class SongsAdapter {
  constructor() {
    this.baseUrl = 
    'http://localhost:3000/api/v1/songs'
  };

  getSongs() {
    return fetch(this.baseUrl).then(res => res.json()
    )
  };
}

// adapter = new SongsAdapter()
// const songs = adapter.getSongs()
