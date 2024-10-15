window.addEventListener("DOMContentLoaded", () => {
    // here start GSAP.
    const box = document.getElementById("box");

    gsap.from(box, {
        x: 1100, // it move 900px on the x axis.
        y:500,
        duration: 2,
        delay: 2,
        rotate: 160,
        repeat: 2,
        borderRadius:"50%",
        backgroundColor: "#000"
    })

})