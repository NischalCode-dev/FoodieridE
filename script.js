setTimeout(function() {
    alert("Welcome to Foodie ridE! This website is created by Nischal kafle.It is in developing phase.");
}, 3000); 

function toggleMenu() {
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
} 
let click=document.getElementsByClassName(".menu-icon");
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});
