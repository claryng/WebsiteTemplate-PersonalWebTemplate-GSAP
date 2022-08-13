
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "iframe",
  pin: true
})

gsap.to(".hello", {
  y: -30,
  scrollTrigger: {
    trigger: ".hello",
    start: "top 50%",
    end: "top 5%",
    scrub: true,
    toggleClass: "ease-in",
  }
})

gsap.to(".intro-interests", {
  y: -30,
  scrollTrigger: {
    trigger: ".intro-interests",
    start: "top 60%",
    end: "top 25%",
    scrub: true,
    toggleClass: "ease-in"
  }
})

gsap.to(".elaborate", {
  y: -30,
  scrollTrigger: {
    trigger: ".elaborate",
    start: "top 30%",
    end: "top 1%",
    scrub: true,
    toggleClass: "ease-in"
  }
})

gsap.to(".elaborate", {
  y: -30,
  scrollTrigger: {
    trigger: ".elaborate",
    start: "top 40%",
    end: "top 5%",
    scrub: true,
    toggleClass: {targets: ".first-letter", className: "ease-in"}
  }
})

ScrollTrigger.create({
  trigger: "iframe",
  scrub: true,
  pin: false
})

// Images Fade In

const options = {
  threshold: 0.5,
  rootMargin: "0% 0% 5% 0%"
};

const faders = document.querySelectorAll(".img");

const scrollEffect = new IntersectionObserver(function(entries, scrollEffect){
  entries.forEach (entry => {
    if(!entry.isIntersecting){
      return;
    }
    entry.target.classList.add("fade-in");
  })
}, options);

faders.forEach(fader => {
  scrollEffect.observe(fader);
});

gsap.utils.toArray(".img").forEach((img,i) =>{
  ScrollTrigger.create({
    trigger: img,
    start: "top 40%",
    end: "top 10%",
    toggleClass: "fade-in"
  })
})

gsap.utils.toArray(".text").forEach((text,i) => {
  ScrollTrigger.create({
    trigger: text,
    start: "top 80%",
    end: "top 20%",
    toggleClass: "appear"
  })
})


// ScrollTrigger.create({
//   trigger: ".skills-projects",
//   start: "top 50%",
//   end: "top 100%",
//   markers: true,
//   scrub: true,
//   toggleClass: {targets: ".ai-ml", className: "ease-in"}
// })

// gsap.utils.toArray(".layer").forEach((layer, i) => {
//   ScrollTrigger.create({
//     trigger: layer,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
//   });
// });
//
// ScrollTrigger.create({
//   snap: 1/2
// })
