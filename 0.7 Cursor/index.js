const main = document.getElementById("main");
const cursor = document.getElementById("cursor");

main.addEventListener("mousemove", (duts) => {
    gsap.to(cursor, {
        x: duts.x,
        y: duts.y,
        ease: "bounce.inOut"
    });

    cursor.classList.add("cursor");
})