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