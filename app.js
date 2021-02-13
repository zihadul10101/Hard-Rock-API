// const searchSongs = async() => {
//     const searchText = document.getElementById('search-field').value;
//     //console.log(searchText);
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     //load data
//     const res=await fetch(url);
//     const data=await res.json();
//     displaySongs(data.data);
//     //console.log(url);
//     // fetch(url)
//     //     .then(res => res.json())
//     //     .then(data => displaySongs(data.data))
// }


const searchSongs =() => {
    const searchText = document.getElementById('search-field').value;
    //console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    //load data
    
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
        .catch(error=>displayError('Something Went Wrong!! Please try again later!'));
}

const displaySongs = songs => {
    //console.log(songs);
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML='';
    songs.forEach(song => {
        // console.log(song.title)
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <div class="col-md-9">
          <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        <audio controls>
         <source src="${song.preview}" type="audio/ogg">     
         </audio>

        </div>
         <div class="col-md-3 text-md-right text-center">
      <button onClick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
`;
        songContainer.appendChild(songDiv);

    });
}

const getLyric=async(artist,title)=>{
   // console.log(artist,title);
    const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
   // console.log(url);
   try{
    const res= await fetch(url);
    const data=await res.json();
     displayLayrics(data.lyrics);
   }
   catch(error){
      displayError('Sorry T faild to load lyrics,Please try again later!');
   }
  

//    fetch(url)
//    .then(res=>res.json())
//    .then(data=>displayLayrics(data.lyrics))
}

const displayLayrics=lyrics=>{
    const layricsDiv=document.getElementById('song-lyrics');
    layricsDiv.innerText=lyrics;
}

const displayError=error=>{
    const errorTag=document.getElementById('error-message');
    errorTag.isConnected=error;
}