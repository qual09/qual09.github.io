const mainWrapper = document.querySelector('.main-wrapper');
mainWrapper.style.display = 'none';

const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// timeline.to(".intro", { y: "-100%", duration: 1 }, "-=1");
timeline.to(".intro", { y: "-100%", duration: 1.5, delay: 1.5 }, "-=1");

// timeline.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });

setTimeout(() => {
  mainWrapper.style.display = 'block';
}, 2400);

setTimeout(() => {
  document.querySelector('.intro').remove();
  document.querySelector('.slider').remove();
}, 4000);

