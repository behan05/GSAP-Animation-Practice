
window.addEventListener("wheel", (dert) => {
    if (dert.deltaY > 0) {
        gsap.to('.marquee__part', {
            x: "100%",
            duration: 6,
            repeat: -1,
            ease: "none"
        });

        gsap.to("img", {
            rotate: 360
        })
    } else {
        gsap.to('.marquee__part', {
            x: "-100%",
            duration: 5,
            repeat: -1,
            ease: "none"
        });
        gsap.to("img", {
            rotate: 180
        })
    }
})