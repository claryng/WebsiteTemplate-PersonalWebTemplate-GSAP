// if('IntersectionObserver' in window){
//   console.log("support");
// }else{
//   console.log("no");
// }


// Word fade out
const headerFader = document.querySelector("#welcome-page");

const optionsDefault = {
  threshold:0,
  rootMargin: "-50%"
};

const headerScroll = new IntersectionObserver(function(entries, headerScroll){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelector("h1").classList.remove("fade-out");
    }
    else{
      document.querySelector("h1").classList.add("fade-out");
    }
  })
}, optionsDefault);

headerScroll.observe(headerFader);

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
