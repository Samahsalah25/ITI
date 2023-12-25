var img=document.querySelector(".img");
var p1=document.querySelector(".p1");
var p2=document.querySelector(".p2");
var p3=document.querySelector(".p3");
var p4=document.querySelector(".p4");
var play=document.querySelector(".play");
var pause=document.querySelector(".pause")
var stop=document.querySelector(".stop")
var mute=document.querySelector(".mute")
var audio=document.querySelector(".audio")
var durTion=document.querySelector(".duration")
var volume=document.querySelector(".volume")
var span=document.querySelector(".span")
var span1=document.querySelector(".span1")

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(play);
console.log(pause);
console.log(stop);
console.log(mute);
console.dir(audio);

p1.addEventListener("click",function(){
       img.src="/resources/1.jpg";
    audio.src="/resources/1.mp3";
})
p2.addEventListener("click",function(){
    img.src="/resources/2.jpg";
 audio.src="/resources/2.mp3";
})
p3.addEventListener("click",function(){
    img.src="/resources/3.jpg";
 audio.src="/resources/3.mp3";
})
p4.addEventListener("click",function(){
    img.src="/resources/4.jpg";
 audio.src="/resources/4.mp3";
})
window.addEventListener("load", function(){
   
   
   

})
play.addEventListener("click",function(){

    audio.play();
})
pause.addEventListener("click",function(){

    audio.pause();
})
stop.addEventListener("click",function(){
    audio.load();
    audio.pause();
})
mute.addEventListener("click",function(){
   audio.muted=!audio.muted
})
volume.addEventListener("input",function(){
 audio.volume=volume.value;
})
durTion.addEventListener("input",function(){
    span.innerHTML=`${formatTime(durTion.value)}/ ${formatTime(audio.duration)} `;
    span1.innerHTML=`X2`;
    durTion.max=audio.duration;
    console.log(audio.duration)
    audio.currentTime=durTion.value;
   audio.currentTime=durTion.value;
  

})
audio.addEventListener("timeupdate", function() {
    span.innerHTML=`${formatTime(durTion.value)}/ ${formatTime(audio.duration)} `  ;
    span1.innerHTML=`X2`;
    span1.addEventListener("click",function(){
        console.log(audio.playbackRate)
        audio.playbackRate = parseFloat(durTion.value);
    })
    durTion.value = audio.currentTime;
});
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return pad(minutes) + ":" + pad(remainingSeconds);
}
function pad(number) {
    return (number < 10) ? "0" + number : number;
}

