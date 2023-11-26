const grid = document.querySelector(".grid");
const menu = document.querySelector(".menu");

grid.addEventListener("click", () => {
    grid.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    grid.classList.toggle("active");
    menu.classList.toggle("active");
}))

let myButton = document.getElementById("scroll-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    } else{
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}