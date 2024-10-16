// Learn GSAP(GreenSoke Animation PlatForm). Animate Anything.

const box = document.getElementById("box");

box.addEventListener("click", (e) => {
    e.bubbles;
    // gsap.to(box, {
    //     x: 1100,
    //     duration: 2,
    //     delay: 1,
    //     borderRadius: "50%"
    // });

    // gsap.from(box, {
    //     x: 1200,
    //     opacity:0.5,
    //     duration: 2,
    //     delay: 1,
    //     borderRadius: "50%"
    // })

    gsap.fromTo(box, {
        // FROM properties (initial state)
        opacity: 0,
        x: 100,
        yoyo:true,
        repeat: 2,
    },
        {
            // TO properties (final state)
            opacity: 1,
            x: 1200,
            duration: 1,

        })
})