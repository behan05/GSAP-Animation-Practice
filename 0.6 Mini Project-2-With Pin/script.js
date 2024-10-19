// GSAP.
window.addEventListener("resize", () => {
    ScrollTrigger.refresh(); // This recalculates scroll positions and pins
})
function animationMotion() {
    gsap.from("#logo h1", {
        opacity: 0,
        y: -100,
        duration: 0.8,
        delay: 0.5
    })
    // For Sync...
    let tl = gsap.timeline();

    tl.from("a", {
        y: -100,
        duration: 0.8,
        stagger: 0.2
    })

    tl.from("#page1", {
        opacity: 0,
        y: 800,
        duration: 1
    })

    gsap.to("#page2 h2", {
        transform: "translateX(-150%)",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 0%",
            end: "top -260%",
            scrub: true,
            markers: false,
            pin: true,
        }
    })

}
animationMotion();