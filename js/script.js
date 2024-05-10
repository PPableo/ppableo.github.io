function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    // create two spans
    // span parent gets child and child gets element details
    var parent = document.createElement("span");
    // elem replaces its value with parent span
    var child = document.createElement("span");
    // parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces its value with parent span
    elem.innerHTML = " ";
    elem.appendChild(parent);
  });
}

function valueSetters() {
  // Set initial state of header elements
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", { y: "100%", opacity: 0 }); // Add opacity: 0
  gsap.set("#home .row img", { opacity: 0 });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    delay: 1,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  });

  tl.to("#loader .parent .child", {
    y: "-110%",
    duration: 1,
    ease: Circ.easeInOut,
  });

  tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  }, "-=1"); // Offset this animation by 1 second

  tl.to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    ease: Circ.easeInOut,
  }, "-=1"); // Offset this animation by 1 second

  tl.to("#green", {
    height: "0%",
    duration: 1,
    ease: Circ.easeInOut,
  }, "-=0.5"); // Offset this animation by 0.5 seconds

  tl.to("#green", {
    height: "0%",
    duration: 1,
    delay: -0.5,
    ease: Circ.easeInOut,
    onComplete: function () {
      animateHomepage();
    },
  });
}



// function animateSvg() {
//   document.querySelectorAll("#Visual>g").forEach(function (e) {
//     var character = e.childNodes[1].childNodes[1];

//     character.style.strokeDasharray = character.getTotalLength() + "px";
//     character.style.strokeDashoffset = character.getTotalLength() + "px";
//   });

//   gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
//     // strokeOffset: 0,
//     strokeDashoffset: 0,
//     duration: 2,
//     ease: Circ.easeInOut,
//     delay: 2,
//   });
// }

function animateHomepage() {
  var tl = gsap.timeline();

  // Animate header elements to desired opacity
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  });

  tl.to("#home .parent .child", {
    y: 0,
    opacity: 1, // Add opacity: 1
    stagger: 0.2,
    duration: 2,
    ease: Expo.easeInOut,
  });

  tl.to("#home .row img", {
    delay: -0.5,
    opacity: 1,
    ease: Expo.easeInOut,
  });
}


function locoInt() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
    // lerp: 0.6,
    // mobile: true,
  });
    // Adding event listeners to each navigation item with the class "js-scroll-link"
    const scrollLinks = document.querySelectorAll('.js-scroll-link');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default behavior of the link (e.g., navigating to a new page)
        const target = this.getAttribute('href'); // Get the value of the "href" attribute
        scroll.scrollTo(document.querySelector(target)); // Scroll to the target element
      });
    });
  }

// function cardHoverEffect() {
//   var showingImage = null; // Initialize showingImage variable

//   document.querySelectorAll(".cnt").forEach(function (cnt) {
//     cnt.addEventListener("mousemove", function (dets) {
//       document.querySelector("#cursor").children[
//         dets.target.dataset.index
//       ].style.opacity = 1;
//       showingImage = dets.target;
//       document.querySelector("#cursor").children[
//         dets.target.dataset.index
//       ].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//       showingImage.style.filter = "grayscale(1)";

//       document.querySelector("#projects").style.backgroundColor =
//         "#" + dets.target.dataset.color;
//     });

//     cnt.addEventListener("mouseleave", function (dets) {
//       if (showingImage) {
//         document.querySelector("#cursor").children[
//           showingImage.dataset.index
//         ].style.opacity = 0;
//         showingImage.style.filter = "grayscale(0)";
//         document.querySelector("#projects").style.backgroundColor = "#f2f2f2";
//         showingImage = null; // Reset showingImage variable
//       }
//     });
//   });
// }


revealToSpan();
valueSetters();
loaderAnimation();
locoInt();
// cardHoverEffect();
// animateSvg();
