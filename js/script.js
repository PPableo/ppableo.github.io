// tl.to("#loader", {
//   height: 0,
//   duration: 2,
//   ease: Expo.easeInOut,
// })

//   .to("#main", {
//     height: "100%",
//     duration: 2,
//     delay: -2,
//     ease: Expo.easeInOut,
//   })

//   .to("#white", {
//     height: "100%",
//     duration: 2,
//     delay: -1.6,
//     ease: Expo.easeInOut,
//   });

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

function loaderAnimation() {

}

revealToSpan();
// loaderAnimation();

gsap.from("g path", {
  strokeDasharray: 64.68521881103516,
  strokeOffset: 64.68521881103516,
  duration: 1,
  ease: Power3
})

var tl = gsap.timeline();

tl.from(".child span", {
  x: 100,
  delay: 1,
  stagger: .2,
  duration: 1.2,
  ease: Power3.easeInOut,
})

tl.to(".parent .child", {
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut,
});

tl.to("#loader", {
  height: 0,
  duration: 1,
  ease: Circ.easeInOut,
});

tl.to("#green", {
  height: "100%",
  top: 0,
  duration: 1,
  delay: -0.7,
  ease: Circ.easeInOut,
});

tl.to("#green", {
  height: "0%",
  duration: 1,
  delay: -0.4,
  ease: Circ.easeInOut,
});
