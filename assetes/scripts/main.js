
const projectModals=document.querySelectorAll(".project-model");
const projectImgs=document.querySelectorAll(".project-img");
const projectCloseBtns=document.querySelectorAll(".project-close-btn");

var projectModal=function(modalClick){
    projectModals[modalClick].classList.add("active");
}
projectImgs.forEach((projectImg,i) =>{
    projectImg.addEventListener("click",()=>{
        projectModal(i);
    });
});

projectCloseBtns.forEach((projectCloseBtns)=> {
    projectCloseBtns.addEventListener("click", () => {
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove("active");
        });
    });
});

// =======================

let header =document.querySelector('header');
let menu= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active')
}

// =======================
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if (darkmode.classList.contains('bx-moon')){
       darkmode.classList.replace('bx-moon', 'bx-sun');
       document.body.classList.add('active');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}


const textToType = ["Full Stack Developer", "Web Developer"];
let textIndex = 0;

function typeWriter(text, index, speed) {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(text, index, speed), speed);
    } else {
        // After typing is complete, clear the text and move to the next one
        setTimeout(() => {
            clearText();
            textIndex = (textIndex + 1) % textToType.length;
            typeWriter(textToType[textIndex], 0, speed);
        }, 1000); // You can adjust the delay before clearing the text (in milliseconds)
    }
}



function clearText() {
    document.getElementById("typewriter-text").innerHTML = "";
}

// Adjust the speed (in milliseconds) to control the typing speed
const typingSpeed = 100;

// Start typing when the page loads
document.addEventListener("DOMContentLoaded", () => {
    typeWriter(textToType[textIndex], 0, typingSpeed);
});


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

  scrollContainer.addEventListener("wheel",(evt)=> {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
});
nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft +=900;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -=900;
});