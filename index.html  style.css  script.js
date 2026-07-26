<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday น้องเขม ❤️</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

</head>

<body>

<div id="loading">

<div class="gift">

🎁

</div>

<h2>กดของขวัญเพื่อเปิดเซอร์ไพรส์</h2>

<button id="openGift">
เปิดของขวัญ ❤️
</button>

</div>

<div id="main">

<div id="rose"></div>

<div id="hearts"></div>

<section class="hero">

<h1>🎂 Happy Birthday 🎂</h1>

<h2>น้องเขม ❤️</h2>

<p class="age">
26 กรกฎาคม • อายุ 20 ปี
</p>

</section>

<section class="gallery">

<img id="photo" src="1.jpg">

<div class="control">

<button onclick="prevPhoto()">⬅</button>

<button onclick="nextPhoto()">➡</button>

</div>

</section>

<section class="letter">

<h2>💌 ถึงน้องเขม</h2>

<p id="typing"></p>

</section>

<section class="love">

<h2>❤️ เราคบกันมาแล้ว ❤️</h2>

<h1 id="timer"></h1>

</section>

<section>

<button class="musicBtn" onclick="playSong()">

🎵 เปิดเพลง "นับหนึ่ง"

</button>

</section>

</div>

<audio id="music">

<source src="music/nabnueng.mp3" type="audio/mpeg">

</audio>

<script src="script.js"></script>

</body>
</html>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Kanit',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:linear-gradient(135deg,#ff8fc7,#ffbfdc,#ffdff1);
background-size:400% 400%;
animation:bgMove 12s ease infinite;
overflow-x:hidden;
color:white;
min-height:100vh;
}

@keyframes bgMove{

0%{background-position:0% 50%;}

50%{background-position:100% 50%;}

100%{background-position:0% 50%;}

}

#loading{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

}

.gift{

font-size:90px;

animation:bounce 1.5s infinite;

cursor:pointer;

}

@keyframes bounce{

0%,100%{

transform:translateY(0);

}

50%{

transform:translateY(-18px);

}

}

#openGift{

margin-top:30px;

padding:18px 45px;

font-size:22px;

border:none;

border-radius:50px;

background:#ff4f8b;

color:white;

cursor:pointer;

transition:.3s;

box-shadow:0 10px 30px rgba(0,0,0,.2);

}

#openGift:hover{

transform:scale(1.08);

}

#main{

display:none;

animation:fade 1s;

padding-bottom:60px;

}

.hero{

padding:60px 20px 20px;

text-align:center;

}

.hero h1{

font-size:55px;

text-shadow:0 0 15px white;

}

.hero h2{

margin-top:15px;

font-size:40px;

}

.age{

margin-top:15px;

font-size:22px;

opacity:.9;

}

.gallery{

width:100%;

display:flex;

flex-direction:column;

align-items:center;

margin-top:30px;

}

.gallery img{

width:330px;

max-width:90%;

border-radius:25px;

border:4px solid rgba(255,255,255,.5);

backdrop-filter:blur(20px);

box-shadow:0 0 40px rgba(255,255,255,.3);

transition:.5s;

}

.gallery img:hover{

transform:scale(1.03);

}

.control{

margin-top:25px;

display:flex;

gap:15px;

}

.control button{

width:65px;

height:65px;

border:none;

border-radius:50%;

font-size:26px;

background:white;

color:#ff4f8b;

cursor:pointer;

transition:.3s;

}

.control button:hover{

transform:scale(1.1);

}

.letter{

width:90%;

max-width:850px;

margin:60px auto;

padding:35px;

border-radius:30px;

background:rgba(255,255,255,.15);

backdrop-filter:blur(20px);

-webkit-backdrop-filter:blur(20px);

box-shadow:0 10px 40px rgba(0,0,0,.2);

text-align:center;

}

.letter h2{

font-size:34px;

margin-bottom:25px;

}

#typing{

font-size:22px;

line-height:42px;

white-space:pre-wrap;

}

.love{

margin-top:50px;

text-align:center;

}

.love h2{

font-size:30px;

margin-bottom:15px;

}

#timer{

font-size:34px;

text-shadow:0 0 12px rgba(255,255,255,.7);

}

.musicBtn{

margin-top:50px;

padding:18px 40px;

font-size:20px;

border:none;

border-radius:50px;

background:#ff4f8b;

color:white;

cursor:pointer;

box-shadow:0 10px 30px rgba(0,0,0,.25);

transition:.3s;

}

.musicBtn:hover{

transform:scale(1.08);

}

.heart{

position:fixed;

bottom:-50px;

font-size:30px;

animation:heartFloat linear forwards;

pointer-events:none;

z-index:999;

}

@keyframes heartFloat{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

.rose{

position:fixed;

top:-40px;

font-size:28px;

animation:roseFall linear forwards;

pointer-events:none;

z-index:998;

}

@keyframes roseFall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(720deg);

opacity:0;

}

}

@keyframes fade{

from{

opacity:0;

transform:scale(.95);

}

to{

opacity:1;

transform:scale(1);

}

}

@media(max-width:768px){

.hero h1{

font-size:42px;

}

.hero h2{

font-size:32px;

}

.gallery img{

width:90%;

}

#typing{

font-size:18px;

line-height:34px;

padding:0 10px;

}

#timer{

font-size:26px;

}

.musicBtn{

width:90%;

font-size:18px;

}

}

const photos=[
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg"
];

let current=0;

const photo=document.getElementById("photo");

function nextPhoto(){

current++;

if(current>=photos.length){

current=0;

}

photo.src=photos[current];

}

function prevPhoto(){

current--;

if(current<0){

current=photos.length-1;

}

photo.src=photos[current];

}

setInterval(nextPhoto,4000);

const letter=`สุขสันต์วันเกิดนะน้องเขม ❤️

วันนี้หนูอายุครบ 20 ปีแล้ว

เค้าขอให้ปีนี้เป็นปีที่ดีที่สุดของเธอ

ขอให้เธอมีความสุขมาก ๆ

สุขภาพแข็งแรง

ยิ้มเยอะ ๆ

สมหวังในทุกเรื่อง

ขอบคุณที่เข้ามาเป็นรอยยิ้มของเค้า

ขอบคุณที่อยู่ข้าง ๆ กันเสมอ

ถึงบางครั้งเค้าจะดื้อ

จะงอแง

หรือทำให้เธอไม่สบายใจ

แต่เค้าก็รักเธอมาก

เค้ารักแฟนๆมากนะ ❤️

Happy Birthday My Love ❤️`;

let i=0;

function typeWriter(){

if(i<letter.length){

document.getElementById("typing").innerHTML+=letter.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

document.getElementById("openGift").onclick=function(){

document.getElementById("loading").style.display="none";

document.getElementById("main").style.display="block";

typeWriter();

firework();

}

const startDate=new Date("2025-10-07T00:00:00");

function updateTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60))%24;

const minutes=Math.floor(diff/(1000*60))%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("timer").innerHTML=

`${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;

}

setInterval(updateTimer,1000);

updateTimer();

function playSong(){

document.getElementById("music").play();

}

function firework(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:200,

spread:120,

origin:{x:.2,y:.5}

});

},400);

setTimeout(()=>{

confetti({

particleCount:200,

spread:120,

origin:{x:.8,y:.5}

});

},800);

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);

function createRose(){

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.fontSize=(20+Math.random()*18)+"px";

rose.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},11000);

}

setInterval(createRose,800);

setInterval(()=>{

photo.style.transform="scale(1.06)";

setTimeout(()=>{

photo.style.transform="scale(1)";

},1800);

},3500);

window.onload=()=>{

updateTimer();

};

document.addEventListener("visibilitychange",()=>{

if(document.visibilityState==="visible"){

updateTimer();

}

});

setTimeout(()=>{

confetti({

particleCount:120,

spread:90,

origin:{y:0.7}

});

},2500);

setInterval(()=>{

confetti({

particleCount:25,

spread:60,

origin:{

x:Math.random(),

y:Math.random()*0.5

}

});

},12000);

console.log("Happy Birthday น้องเขม ❤️");
