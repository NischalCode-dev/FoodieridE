
let main = document.querySelector("#main");
let mouse = document.querySelector(".mouse");


main.addEventListener("mousemove", function (dets) {
    const size = 100;
    mouse.style.top = (dets.clientY - size / 2) + "px";
    mouse.style.left = (dets.clientX - size / 2) + "px";
});
const wheel = document.getElementById("wheel");
const items = document.querySelectorAll(".wheel-item");

let angle = 0;
let isDragging = false;
let startX = 0;

const total = items.length;
const radius = 100;

// position items in circle
items.forEach((item, i) => {
    const theta = (i / total) * (2 * Math.PI);
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);

    item.style.left = 50 + x / 2 + "%";
    item.style.top = 50 + y / 2 + "%";
    item.style.transform = "translate(-50%, -50%)";
});

// drag
wheel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
});

window.addEventListener("mouseup", () => isDragging = false);

window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let move = e.clientX - startX;
    angle += move * 0.3;

    wheel.style.transform = `rotate(${angle}deg)`;
    startX = e.clientX;

    updateDetails();
});

// touch
wheel.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

window.addEventListener("touchend", () => isDragging = false);

window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    let move = e.touches[0].clientX - startX;
    angle += move * 0.3;

    wheel.style.transform = `rotate(${angle}deg)`;
    startX = e.touches[0].clientX;

    updateDetails();
});

// update details (NOW WITH IMAGE)
function updateDetails() {
    let normalized = ((angle % 360) + 360) % 360;
    let index = Math.round(normalized / (360 / total)) % total;

    let active = items[index];

    document.getElementById("name").innerText = active.dataset.name;
    document.getElementById("desc").innerText = active.dataset.desc;
        document.getElementById("pesc").innerText = active.dataset.price;
    document.getElementById("product-img").src = active.dataset.img;
}
function goToPage() {

    let normalized = ((angle % 360) + 360) % 360;
    let index = Math.round(normalized / (360 / total)) % total;

    let active = items[index];

    const name = active.dataset.name;
    const desc = active.dataset.desc;
    const price = active.dataset.price;
    const img = active.dataset.img;
    const rest = "FoodieRide";

    const url = "index2.html?name=" + encodeURIComponent(name) +
        "&price=" + price +
        "&desc=" + encodeURIComponent(desc) +
        "&rest=" + encodeURIComponent(rest) +
        "&img=" + encodeURIComponent(img);

    console.log(url); // debug

    window.location.href = url;
}
//rotating bar
// const params = new URLSearchParams(window.location.search);

// const name = params.get("name");
// const price = params.get("price");
// const desc = params.get("desc");
// const rest = params.get("rest");
// const img = params.get("img");

// document.getElementById("name").innerText = active.dataset.name;
//     document.getElementById("desc").innerText = active.dataset.desc;
//     document.getElementById("product-img").src = active.dataset.img;

    //horizontal-scroll-bar
const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");
const desc = params.get("desc");
const rest = params.get("rest");
const img = params.get("img");

document.getElementById("name").innerText = name;
document.getElementById("desc").innerText = desc;
document.getElementById("price").innerText = "Price: Rs. " + price;
document.getElementById("rest").innerText = "Restaurant: " + rest;
document.getElementById("product-img").src = img;

function payNow() {
    alert("Payment Successful for " + name + " 🎉");
}
let click=document.getElementsByClassName(".menu-icon");

