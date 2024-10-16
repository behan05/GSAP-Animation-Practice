const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

var tl = gsap.timeline();

tl.from(h2, {
    y: -100,
    duration: 1.5,
    delay: 0.1,
    color: "#fff"
})

tl.from("h3", {
    y: -100,
    duration: 1,
    stagger: 0.2
})
tl.from("h1", {
    y: -100,
    opacity: 0,
    duration: 1,
})

tl.to("h1", {
    color: "crimson",
    duration: 1,
})



