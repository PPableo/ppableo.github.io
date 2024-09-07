function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    
    parent.classList.add("parent");
    child.classList.add("child");
    
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child", {
    x: "100%",
    duration: 1.5,
    stagger: 0.2,
    ease: "Power3.easeInOut"
  });

  tl.to("#loader .child", {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut"
  });

  tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: "power4.inOut"
  }, "-=0.5");

  tl.to("#green", {
    height: "100%",
    top: 0,
    duration: .3,
    ease: Circ.easeInOut,
  }, "-=1"); // Offset this animation by 1 second

  tl.to("#green", {
    height: "0%",
    duration: .2,
    ease: Circ.easeInOut,
  }, "-=0.5"); // Offset this animation by 0.5 seconds

  tl.to("#green", {
    height: "0%",
    duration: 1,
    delay: -0.5,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateHomepage();
    }
  });
}

function animateHomepage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: "power4.out"
  });

  tl.to("#home .parent .child", {
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power4.out"
  });

  tl.to("#home .row img", {
    opacity: 1,
    ease: "power4.out",
    onComplete: function() {
      if (typeof locoScroll !== 'undefined') {
        locoScroll.update();
      }
    }
  });
}

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

  window.locoScroll = scroll;

  // Handling the scroll for anchor links
  document.querySelectorAll('.js-scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      scroll.scrollTo(target);
    });
  });
}

function init() {
  revealToSpan();
  valueSetters();
  loaderAnimation();
  locoInitialize();
}

window.addEventListener('load', init);