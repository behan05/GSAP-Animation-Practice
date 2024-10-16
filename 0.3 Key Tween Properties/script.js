// gsap.to(".box", {
//     y: 30,
//     duration: 2,
//     // stagger:1
// })
// gsap.from(".box", {
//     y: 0,
//     duration: 3,
//     delay: 2,
//     repeat: 1
// })

// gsap.to(".box", {
//     x: 400,
//     backgroundColor: "lightseagreen",
//     borderRadius: "50%",
//     duration: 2,
// })
// gsap.to(".box", {
//     x: 0,
//     delay: 1,
//     duration: 2
// })

let tl = gsap.timeline();

// tl.to(".box", {
//     x: 400,
//     duration: 2,
//     delay: 1,
//     borderRadius: "50%",
//     backgroundColor: "blue",
//     repeat: 2,
//     yoyo: true,
//     repeatDelay: 2
// })

// tl.to(".box", {
//     x: 0,
//     duration: 2,
//     delay: 1,
//     borderRadius: "0",
//     backgroundColor: "crimson"
// })

tl.to(".box", {
    x: 800,
    duration: 2,
    delay: 1
})
tl.to(".box", {
    borderRadius: "50%",
    backgroundColor: "blue",
    borderStyle: "dashed",
    duration: 2,
    delay: 1
})
tl.to(".box", {
    rotate: 360,
    yoyo: true,
    repeat: 5,
    duration: 2,
    delay: 1
})
gsap.from("h1", {
    y: 30,
    duration: 0.5,
    delay: 1,
    opacity: 0,
    stagger: 2,
    color: "red"
})