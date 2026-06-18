document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Loader
    window.addEventListener('load', () => {
        gsap.to("#loader", {
            opacity: 0,
            duration: 1.5,
            delay: 1,
            onComplete: () => {
                document.querySelector("#loader").style.display = "none";
                startHeroIntro();
            }
        });
    });

    function startHeroIntro() {
        const tl = gsap.timeline();
        tl.to("#hero-sub", { opacity: 1, y: -20, duration: 1 })
          .to("#hero-title", { opacity: 1, y: -20, duration: 1 }, "-=0.6")
          .to("#hero-btns", { opacity: 1, y: -20, duration: 1 }, "-=0.6");
    }

    // Scroll reveal for menu items
    gsap.from(".menu-item-card", {
        scrollTrigger: {
            trigger: "#menu-grid",
            start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.8
    });
});
