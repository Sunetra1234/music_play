const music = new Audio('audio/1.mp3');
const songs = [
    {
        id:'1',
        songName:` Night Changes <br>
        <div class="subtitle">One Direction</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Perfect <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"3",
        songName: ` Until I Found You <br><div class="subtitle"> Stephen Sanchez</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Dandelions <br><div class="subtitle">Ruth B</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Dusk till Dawn <br><div class="subtitle">Zayn Malik</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Bahara <br><div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Subhanallah <br><div class="subtitle">Sreerama Chandra</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Mast Magan <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Uff Teri Ada <br><div class="subtitle">Alyssa Mendonsa</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Sadda Haq <br><div class="subtitle">Mohit Chauhan</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Zihaal e Miskin <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `As It Was <br><div class="subtitle">Harry Styles </div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Sunroof <br><div class="subtitle">Nicky Youre</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Naseeb Se <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Obsessed <br><div class="subtitle">Riar Saab</div>`,
        poster: "img/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
Array.from(document.getElementsByClassName('songTrend')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[10+i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[10+i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
      element.style.background = "";
      element.querySelector('h5').style.color =  "";
      element.querySelector('.subtitle').style.color = ""; 
      element.querySelector('span').style.color = "";
    })
  }
  
  let index = 0;
  let poster_master_play = document.getElementById('poster_master_play');
  let title = document.getElementById('title');
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      music.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      })
  
      song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
      })
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
      music.addEventListener('ended', () => {
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
      })
      makeAllBackgrounds();
      const clickedSongItem = e.target.closest('.songItem');
      clickedSongItem.style.background = "rgb(105, 105, 170, .1)";
      clickedSongItem.querySelector('h5').style.color = "#fff"; 
      clickedSongItem.querySelector('.subtitle').style.color = "#fff"; 
      clickedSongItem.querySelector('span').style.color = "#fff";
    })
  })
const makeTrendBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songTrend')).forEach((element) => {
        element.style.background = "";
        element.querySelector('h5').style.color =  "";
        element.querySelector('.subtitle').style.color = ""; })
     }
    
     Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
       element.addEventListener('click', (e) => {
         index = e.target.id;
         makeAllPlays();
         e.target.classList.remove('bi-play-circle-fill');
         e.target.classList.add('bi-pause-circle-fill');
         music.src = `audio/${index}.mp3`;
         poster_master_play.src = `img/${index}.jpg`;
         music.play();
         let song_title = songs.filter((ele) => {
           return ele.id == index;
         })
     
         song_title.forEach(ele => {
           let { songName } = ele;
           title.innerHTML = songName;
         })
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');
         wave.classList.add('active2');
         music.addEventListener('ended', () => {
           masterPlay.classList.add('bi-play-fill');
           masterPlay.classList.remove('bi-pause-fill');
           wave.classList.remove('active2');
         })
         makeTrendBackgrounds();
         const clickedSongTrend = e.target.closest('.songTrend');
      clickedSongTrend.style.background = "rgb(105, 105, 170, .1)";
      clickedSongTrend.querySelector('h5').style.color = "#fff"; 
      clickedSongTrend.querySelector('.subtitle').style.color = "#fff";
        })
    })       
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index-=1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
      return ele.id == index;
    })

    song_title.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName;
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    music.addEventListener('ended', () => {
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('h5').style.color =  "#fff";
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('.subtitle').style.color = "#fff"; 
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('span').style.color = "#fff"
})
next.addEventListener('click', ()=>{
    index+=1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
      return ele.id == index;
    })

    song_title.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName;
    })
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    music.addEventListener('ended', () => {
      masterPlay.classList.add('bi-play-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('h5').style.color =  "#fff";
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('.subtitle').style.color = "#fff"; 
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].querySelector('span').style.color = "#fff"
})
// let index2=0;
// back.addEventListener('click', () => {
//     index2-=1;
//     if (index2 < 11) {
//         index2 = songs.length;
//     }
//     music.src = `audio/${index2}.mp3`;
//     poster_master_play.src = `img/${index2}.jpg`;
//     music.play();
//     let song_title = songs.filter((ele) => {
//         return ele.id == index2;
//     });

//     song_title.forEach((ele) => {
//         let { songName } = ele;
//         title.innerHTML = songName;
//     });

//     makeAllPlays();

//     document.getElementById(`${index2}`).classList.remove('bi-play-fill');
//     document.getElementById(`${index2}`).classList.add('bi-pause-fill');
//     makeTrendBackgrounds();
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].style.background = "rgb(105, 105, 170, .1)";
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].querySelector('h5').style.color = "#fff";
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].querySelector('.subtitle').style.color = "#fff";
// });

// next.addEventListener('click', () => {
//     index2+=1;
//     if (index2 > songs.length) {
//         index2 = 11;
//     }
//     music.src = `audio/${index2}.mp3`;
//     poster_master_play.src = `img/${index2}.jpg`;
//     music.play();
//     let song_title = songs.filter((ele) => {
//         return ele.id == index2;
//     });

//     song_title.forEach((ele) => {
//         let { songName } = ele;
//         title.innerHTML = songName;
//     });

//     makeAllPlays();

//     document.getElementById(`${index2}`).classList.remove('bi-play-fill');
//     document.getElementById(`${index2}`).classList.add('bi-pause-fill');
//     makeTrendBackgrounds();
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].style.background = "rgb(105, 105, 170, .1)";
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].querySelector('h5').style.color = "#fff";
//     Array.from(document.getElementsByClassName('songTrend'))[`${index2 - 1}`].querySelector('.subtitle').style.color = "#fff";
// });

