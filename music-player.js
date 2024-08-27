const songs = [
    { title: "The Moment", src: "assets/music/1.wav" },
    { title: "Cold Sore", src: "assets/music/2.wav" }
  ];
  
  let currentSongIndex = 0;
  
  function updatePlayer() {
    const songTitle = document.getElementById("song-title");
    const audioSource = document.getElementById("audio-source");
    const audioPlayer = document.getElementById("audio-player");
  
    songTitle.textContent = songs[currentSongIndex].title;
    audioSource.src = songs[currentSongIndex].src;
    audioPlayer.load();
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) < 0 ? songs.length - 1 : (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
  }
  
  document.addEventListener("DOMContentLoaded", updatePlayer);