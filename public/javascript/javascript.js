
const videoContainer = document.querySelector('.videoContainer');
const soundBackgroundVideo = document.querySelector(".soundBackgroundVideo");
const backgroundVideo = document.querySelector(".backgroundVideo");
const musicName = document.querySelector(".musicBox__musicName");
const singerName = document.querySelector(".musicBox__singerName");
const music = document.querySelector(".music");
const image = document.querySelector(".imagePhoto").firstElementChild;
const musicBox__playPauseButton = document.querySelector('.musicBox__playPauseButton'); 
const musicBox__status = document.querySelector('.musicBox__status');
const musicBox__nexButton = document.querySelector('.musicBox__nexButton');
const musicBox__previousButton = document.querySelector('.musicBox__previousButton');
const musicBox__musicTime = document.querySelector('.musicBox__musicTime');
const musicBox__progressTime = document.querySelector('.musicBox__progressTime');
const musicBox__backward10second = document.querySelector('.musicBox__backward10second');
const musicBox__forward10second = document.querySelector('.musicBox__forward10second');
const musicBox__progress = document.querySelector('.musicBox__progress');
const musicBox__soundIcons = document.querySelector('.musicBox__soundIcons');
const musicBox__playMode = document.querySelector('.musicBox__playMode');
const playListButton = document.querySelector('.playListButton');
const musicContainer = document.querySelector('.musicContainer');
const musicList = document.querySelector('.musicList');
const musicList__container = document.querySelector('.musicList__container');
const musicBox__progressBar = document.querySelector('.musicBox__progressbar');
let musicState__flag = false ;
let stateFlag = false ;
//music data
let Index = 0 ;
const musics = [
    { id : 0 , musicName  : "Super Gremlin", singerName : "Kodak Black" , imageAddress : "musics/image/image1.jpg" , musicAddress : "musics/music/music1.mp3"},
    { id : 1 , musicName  : "POPSTAR", singerName : "Dj Khaled" , imageAddress : "musics/image/image2.jpg" , musicAddress : "musics/music/music2.mp3" },
    { id : 2 , musicName  : "Higher", singerName : "Eminem" , imageAddress : "musics/image/image3.jpg" , musicAddress : "musics/music/music3.mp3" },
    { id : 3 , musicName  : "NDA", singerName : "Billie Eilish" , imageAddress : "musics/image/image4.jpg" , musicAddress : "musics/music/music4.mp3" },
    { id : 4 , musicName  : "I See Red", singerName : "Everybody Loves an Outlaw" , imageAddress : "musics/image/image5.jpg" , musicAddress : "musics/music/music5.mp3" },
    { id : 5 , musicName  : "Hey Boy", singerName : "Sia" , imageAddress : "musics/image/image6.jpg" , musicAddress : "musics/music/music6.mp3" },
    { id : 6 , musicName  : "Godzilla", singerName : "Eminem" , imageAddress : "musics/image/image7.jpg" , musicAddress : "musics/music/music7.mp3" }
];
//music play mode
const musicPlayMode = [
 { name : "normalLoop" , src : '<svg class="fill-white" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M341.3,28.3v85.3H128c-70.7,0-128,57.3-128,128c0,21.5,5.8,41.4,15.2,59.2L68,263.2c-2.4-6.8-4-13.9-4-21.5c0-35.4,28.7-64,64-64h213.3V263L512,156.3V135L341.3,28.3z M444,262.8c2.4,6.8,4,13.9,4,21.5c0,35.4-28.6,64-64,64H170.7V263L0,369.7V391l170.7,106.7v-85.3H384c70.7,0,128-57.3,128-128c0-21.5-5.8-41.4-15.2-59.2L444,262.8z"/></svg>'},
 { name : "repeatOne" , src : '<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20px" height="20px"><path d="M11,16v-4.5l-1.5,1.5-1.5-1.5,3.788-3.5h2.212v8h-3Zm-3-10h12v3l3.707-3.793c.39-.39,.39-1.024,0-1.414l-3.707-3.793V3H8C3.589,3,0,6.589,0,11H3c0-2.757,2.243-5,5-5Zm8,12H4v-3L.293,18.793c-.39,.391-.39,1.024,0,1.414l3.707,3.793v-3h12c4.411,0,8-3.589,8-8h-3c0,2.757-2.243,5-5,5Z"/></svg>'},
 { name : "multipleLoop" , src : '<svg class="fill-white" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"/></svg>'}
];
//random video in background
function randomVideo(){
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  backgroundVideo.setAttribute("src", `./videos/video${randomNumber}.mp4`);
  backgroundVideo.muted = true;
  backgroundVideo.play();
}
//create item in musicList
function createDivElement( imageAddress , musicName , singerName , id ){
  let containerDIV = document.createElement('div');
  containerDIV.classList.add('musicList__item','relative','w-full','h-52','rounded-md','backdrop-blur-md','text-white','overflow-hidden','cursor-pointer');
  containerDIV.setAttribute('user-id',id);
  let coverDIV = document.createElement('div');
  coverDIV.classList.add('musicList__cover' , 'absolute' , 'left-0' , 'top-0' , 'w-full' , 'h-full' , 'bg-projectMainColor' , 'backdrop-blur-md' , 'z-10' , 'opacity-0' , 'transition-[0.2s]');
  let photoContainerDIV = document.createElement('div');
  photoContainerDIV.classList.add('musicList__photo' , 'absolute' , 'left-0' , 'top-0' , 'w-full' , 'h-full' , 'z-0');
  let photoIMG = document.createElement('img');
  photoIMG.src = imageAddress ;
  photoIMG.alt = musicName ;
  photoIMG.classList.add('w-full' , 'h-full' , 'object-cover');
  photoContainerDIV.appendChild(photoIMG);
  let contentContainerDIV = document.createElement('div');
  contentContainerDIV.classList.add('musicList__content' , 'relative' , 'z-20' , 'flex' , 'justify-between' , 'items-center' , 'h-full' , 'p-4' , 'text-center' , 'gap-3' , 'flex-col' , 'opacity-0' , 'transition-[0.2s]');
  let musicNameH4 = document.createElement('h4');
  musicNameH4.classList.add('musicList__name' , 'text-2xl' , 'font-bold' );
  musicNameH4.textContent = musicName ;
  let musicSingerNameH5 = document.createElement('h5');
  musicSingerNameH5.classList.add('musicList__singerName','text-sm','font-normal');
  musicSingerNameH5.textContent = singerName;
  contentContainerDIV.appendChild(musicNameH4);
  contentContainerDIV.appendChild(musicSingerNameH5);
  containerDIV.appendChild(coverDIV);
  containerDIV.appendChild(photoContainerDIV);
  containerDIV.appendChild(contentContainerDIV);
  musicList__container.appendChild(containerDIV);
}
//calculate progress with function :
function calculateProgressWidth(timeDuration , currentTime){
   let width = (currentTime *100)/timeDuration ;
   musicBox__progress.style.width = `${width}%`;
}
//make time structure
function setTimeForm(time){
  let finallyTimeSecond;
  let finallyTimeMinute;
  let minute = Math.floor(Math.floor(time)/60);
  let second = Math.floor(time) - (minute * 60); 
  if(second<10){
    finallyTimeSecond = '0' + second ;
  }else{
    finallyTimeSecond = second ;   
  }
  if(minute<10){
    finallyTimeMinute = '0' + minute ;
  }else{
    finallyTimeMinute = minute ;
  }
  return finallyTimeMinute + ':' + finallyTimeSecond ;
}
//function for set music information to html element : 
function setMusicInformation( mName , sName , mAddress , iAddress ){
  musicName.textContent = mName ;
  singerName.textContent = sName ;
  music.setAttribute('src', mAddress );
  image.setAttribute('src' , iAddress );
}
//play the music :
function playMusic(){
  music.play();
  musicBox__playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg>  ' ;
  musicState__flag = true ;
  setTimeout(()=>{
    musicBox__musicTime.innerHTML = setTimeForm(music.duration);
  },100);
  setInterval(()=>{
    musicBox__progressTime.innerHTML = setTimeForm(music.currentTime);
    calculateProgressWidth(music.duration , music.currentTime);
    if(music.duration === music.currentTime){
      nextMusic();
    }
   } , 1000);
}
//set music and video
window.addEventListener('load', () => {
    randomVideo();
    music.pause();
    setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
});
//background video sound
soundBackgroundVideo.addEventListener("click", () => {
  soundBackgroundVideo.innerHTML = "";
  if (backgroundVideo.muted) {
      soundBackgroundVideo.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>';
      backgroundVideo.muted = false;
  } else {
    soundBackgroundVideo.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>';
      backgroundVideo.muted = true;
  }
});
//change play mode icon
let musicPlayModeIndex = 1 ;
let stateName = 'normalLoop' ;
musicBox__playMode.addEventListener('click',()=>{
  musicBox__playMode.innerHTML = '';
  if(musicPlayModeIndex <= musicPlayMode.length-1){
    stateName = musicPlayMode[musicPlayModeIndex].name;
    musicBox__playMode.innerHTML = musicPlayMode[musicPlayModeIndex].src ;
    musicPlayModeIndex ++ ;
  }else{
    musicPlayModeIndex = 0 ;
    stateName = musicPlayMode[musicPlayModeIndex].name;
    musicBox__playMode.innerHTML = musicPlayMode[musicPlayModeIndex].src ;
    musicPlayModeIndex ++ ;
  }
});
//change sound music sound state
musicBox__soundIcons.addEventListener("click", () => {
  musicBox__soundIcons.innerHTML = "";
  if (music.muted) {
    musicBox__soundIcons.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>';
      music.muted = false;
  } else {
    musicBox__soundIcons.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>';
      music.muted = true;
  }
});
//play and pause music
musicBox__playPauseButton.addEventListener('click',()=>{
 if(!musicState__flag){
  playMusic();
  musicBox__status.innerHTML = "Play"
 }else{
  music.pause();
  musicBox__status.innerHTML = 'Pause' ;
  musicBox__playPauseButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 ml-[0.1rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/></svg>';
  musicState__flag = false ;
 }
});
//next and previous music
musicBox__nexButton.addEventListener('click' ,  nextMusic);
musicBox__previousButton.addEventListener('click' , previousMusic);
function nextMusic(){
  randomVideo();
  if(stateName == 'normalLoop'){
    if(Index >= musics.length-1){
      Index = 0;
      setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    }else{
      Index ++ ;
      setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    }
    playMusic();
 }else if(stateName == 'repeatOne'){
  Index = Index ;
  setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
  backgroundVideo.muted = true;
  backgroundVideo.play();
  playMusic();
 }else{
    Index = Math.floor(Math.random() * musics.length);
    setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    playMusic();
 }
}
function previousMusic(){
  randomVideo();
  if(stateName == 'normalLoop'){
    if(Index===0){
      Index = musics.length - 1 ;
      setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    }else{
      Index -- ;
      setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    }
    playMusic();
 }else if(stateName == 'repeatOne'){
  Index = Index ;
  setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
  playMusic();
 }else{
    Index = Math.floor(Math.random() * musics.length);
    setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    playMusic();
 }

}
//forward and backward music
musicBox__backward10second.addEventListener('click',()=>{
  music.currentTime -= 10 ;
  playMusic();
});
musicBox__forward10second.addEventListener('click',()=>{
  music.currentTime += 10 ;
  playMusic();
});
//insert all musics in music list
musicList__container.innerHTML = '' ;
musics.forEach(element => {
  createDivElement( element.imageAddress , element.musicName , element.singerName ,element.id);
});
const musicList__item = document.querySelectorAll('.musicList__item');
let showPlayList__flag = false;
//show and hide playList
playListButton.addEventListener('click', () => {
  if (showPlayList__flag) {
    musicList.classList.remove('flex');
    musicList.classList.add('hidden');
    musicContainer.classList.remove('max-w-[800px]');
    musicContainer.classList.add('max-w-[380px]');
    showPlayList__flag = false;
  } else {
    musicContainer.classList.remove('max-w-[380px]');
    musicContainer.classList.add('max-w-[800px]');
    setTimeout(() => {
      musicList.classList.remove('hidden');
      musicList.classList.add('flex');
    }, 150);      
    showPlayList__flag = true;
  }
});
//hover musics in musicList interface
musicList__item.forEach( element =>{
  element.addEventListener('mouseenter' , ()=>{
    element.firstElementChild.classList.remove('opacity-0');
    element.lastElementChild.classList.remove('opacity-0')
    element.firstElementChild.classList.add('opacity-1');
    element.lastElementChild.classList.add('opacity-1');
  });
  element.addEventListener('mouseleave',()=>{
    element.firstElementChild.classList.remove('opacity-1');
    element.lastElementChild.classList.remove('opacity-1')
    element.firstElementChild.classList.add('opacity-0');
    element.lastElementChild.classList.add('opacity-0');
  });
});
//set music when clicked in a music in musicList
musicList__item.forEach(element => {
  element.addEventListener('click',()=>{
    randomVideo();
    Index = Number(element.getAttribute('user-id'));
    setMusicInformation(musics[Index].musicName,musics[Index].singerName,musics[Index].musicAddress,musics[Index].imageAddress);
    playMusic();
  });
});
//click on the progress and go to the that time
musicBox__progressBar.addEventListener('click',(ev)=>{
   let unitWidth = music.duration / musicBox__progressBar.offsetWidth ;
   let clickedTime = ev.layerX * unitWidth ;
   music.currentTime = clickedTime ;
});


