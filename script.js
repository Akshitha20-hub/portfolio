/* ==========================
   TYPING ANIMATION
========================== */

const typingText =
document.querySelector(".typing-text");

const roles = [
"Data Analytics Intern",
"AI & ML Enthusiast",
"Python Developer",
"Data Science Student",
"Power BI Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!typingText) return;

const currentRole =
roles[roleIndex];

if(!deleting){

typingText.textContent =
currentRole.substring(0,charIndex++);

if(charIndex >
currentRole.length){

deleting = true;

setTimeout(typeEffect,1500);

return;
}

}else{

typingText.textContent =
currentRole.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

roleIndex =
(roleIndex + 1) %
roles.length;

}

}

setTimeout(
typeEffect,
deleting ? 50 : 100
);

}

typeEffect();

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".glass-card,.project-card,.skill-card,.cert-card,.timeline-item"
);

function revealOnScroll(){

revealElements.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top <
window.innerHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
   HERO FADE IN
========================== */

window.addEventListener(
"load",
()=>{

const hero =
document.querySelector(
".hero-content"
);

if(hero){

hero.classList.add(
"show"
);

}

}
);

/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(
pageYOffset >= sectionTop
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active"
);

}

});

}
);

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const scrollBtn =
document.createElement("button");

scrollBtn.id =
"scrollTopBtn";

scrollBtn.innerHTML = "↑";

document.body.appendChild(
scrollBtn
);

window.addEventListener(
"scroll",
()=>{

if(
window.scrollY > 400
){

scrollBtn.style.display =
"block";

}else{

scrollBtn.style.display =
"none";

}

}
);

scrollBtn.addEventListener(
"click",
()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

}
);

/* ==========================
   MATRIX RAIN EFFECT
========================== */

const canvas =
document.getElementById(
"matrix"
);

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const chars = [
"📊",
"📈",
"📉",
"💹",
"🧠",
"🤖",
"💻",
"📋",
"SQL",
"AI",
"ML",
"BI",
"ETL",
"CSV",
"EDA",
"KPI",
"API",
"DATA"
];

const fontSize = 16;

const columns =
canvas.width / fontSize;

const drops = [];

for(
let i=0;
i<columns;
i++
){

drops[i]=1;

}

function draw(){

ctx.fillStyle =
"rgba(2,6,23,0.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle =
"#38bdf8";

ctx.font =
fontSize +
"px monospace";

for(
let i=0;
i<drops.length;
i++
){

const text =
chars[
Math.floor(
Math.random() *
chars.length
)
];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i] *
fontSize >
canvas.height
&&
Math.random() >
0.975
){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(
draw,
35
);

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);

}