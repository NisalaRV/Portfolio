
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

projectCloseBtns.forEach((projectCloseBtn)=> {
    projectCloseBtn.addEventListener("click", () => {
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