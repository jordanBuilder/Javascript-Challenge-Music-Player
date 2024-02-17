const image = document.getElementById("cover"),
title = document.getElementById("music-title"),
artist = document.getElementById("music-artist"),
currentTimeEl = document.getElementById("current-time"),
durationEl = document.getElementById("duration"),
progress = document.getElementById("progress"),
playerProgess = document.getElementById("player-progress"),
prevBtn = document.getElementById("prev"),
nextBtn = document.getElementById("next"),
playBtn = document.getElementById("play"),
background = document.getElementById("bg-img");


const music = new Audio();
// 
const songs = [
    {
        path : "../songs/The lumineers - Sleep on the floor.mp3",
        displayName: "Sleep on the floor",
        cover: "../images/The_Lumineers_Sleep_On_The_Floor.jpg",
        artist: "The Lumineers",
    },
    {
        path : "../songs/The lumineers - Angela.mp3",
        displayName: "Angela",
        cover: "../images/the lumineers -- Angela.jpg",
        artist: "The Lumineers",
    },
    {
        path : "../songs/The lumineers Cleopatra.mp3",
        displayName: "Cleopatra",
        cover: "../images/lumineers wallpaper.jpg",
        artist: "The Lumineers",
    },
];

let musicIndex = 0;
let isPlaying = false;
function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
}
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        togglePlay();
    }
});

function playMusic(){
    isPlaying = true;
    //Change play button icon
    playBtn.classList.replace("fa-play", "fa-pause");
    // set button hover title
    playBtn.setAttribute('title','Pause');

    music.play();
}


function pauseMusic(){
    isPlaying = false;
    //Change play button icon
    playBtn.classList.replace("fa-pause", "fa-play");
    // set button hover title
    playBtn.setAttribute('title','Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic(); 
}

function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) =>String(Math.floor(time)).padStart(2, '0');

    durationEl.textContent = `${formatTime(duration/60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime/60)}:${formatTime(currentTime % 60)}`;
}
function setProgressBar(e){
    const width = playerProgess.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));

music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate',updateProgressBar);
playerProgess.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);