// GSAP Zoom Animation
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.timeline({
      scrollTrigger: {
        trigger: ".wrappers",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to(".zoom", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(".section.hero", {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
    }, "<");
});

