

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

// ALERT

setTimeout(() => {

    alert(
        "Welcome to Foodie ridE 🚖🍕\nWebsite is currently in developing phase.This is created by Nischal Kafle"
    );

}, 3000);

// MOBILE MENU

function toggleMenu(){

    let menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}

// TYPING EFFECT

const text = "Delicious Food, Delivered Fast 🍕";

const typing = document.getElementById("typing");

let i = 0;

function typeText(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeText,100);

    }

}

typeText();

// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

    hiddenElements.forEach((el)=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

});
