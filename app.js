const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    //console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
}
const displaySongs = songs => {
    //console.log(songs);
    const songContainer = document.getElementById('song-container');
    songs.forEach(song => {
        // console.log(song.title)
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
          <h3 class="lyrics-name">${song.title}</h3>
           <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
         <div class="col-md-3 text-md-right text-center">
      <button class="btn btn-success">Get Lyrics</button>
        </div>
`;
        songContainer.appendChild(songDiv);

    });
}