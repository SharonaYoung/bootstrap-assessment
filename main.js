const form = document.querySelector('form');
const songInput = document.querySelector('#songTitle');
const artistInput = document.querySelector('#artist');
const ulEl = document.querySelector('#list');

// let favorite = {song: '', artist: ''};
// const {song, artist} = favorite;

let songs = [];
document.querySelector('button').addEventListener('click', function(event){
  event.preventDefault();

  const song = songInput.value;
  const artist = artistInput.value;

  // add entry from inputs to array
  songs.push({song, artist});
  console.log(songs);
  songInput.value = '';
  artistInput.value = '';

  // create li for entered songs
  let songList = songs.map(fav => `
    <li> ${fav.song} by ${fav.artist}</li>
  `)

  ulEl.innerHTML = songList.join(" ");
});