let products = document.querySelector(".products");
let popUpContainer = document.querySelector(".pop-up-container");
let intro = document.querySelector("intro img");
let mand = document.getElementById("#toggleMand");

products.addEventListener("click", toggle);

function toggle() {
  popUpContainer.classList.toggle("togglethis");
}

// gsap.from(".inspiration", {
//   scrollTrigger: ".story", // start the animation when ".box" enters the viewport (once)
//   x: -100,
// });
