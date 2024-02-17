const image = document.getElementById("cover"),
title = document.getElementById("music-title"),
artist = document.getElementById("music-artist"),
currentTimeEl = document.getElementById("current-time"),
durationEl = document.getElementById("duration"),
progress = document.getElementById("progress"),
playerProgess = document.getElementById("player-progess"),
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
        cover: "The Lumineers Iphone Wallpaper-Sleep on the floor #lumineersaesthetic #lumineers #sleeponthefloor #thelumimeers.jpg",
        artist: "The Lumineers",
    },
    {
        path : "../songs/The lumineers - Angela.mp3",
        displayName: "Angela",
        cover: "the lumineers -- Angela.jpg",
        artist: "The Lumineers",
    },
    {
        path : "../songs/The lumineers Cleopatra.mp3",
        displayName: "Cleopatra",
        cover: "lumineers wallpaper.jpg",
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

function playMusic(){
    isPlaying = true;
    //Change play button icon
    playBtn.classList.replace("fa-play", "fa-pause");
    // set button hover title
    playBtn.setAttribute('title','pause');

    music.play();
}


function pauseMusic(){
    isPlaying = false;
    //Change play button icon
    playBtn.classList.replace("fa-pause", "fa-play");
    // set button hover title
    playBtn.setAttribute('title','play');

    music.pause();
}