function abc(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
abc();



var tl=gsap.timeline();
tl.to(".section1>h1", {
  // scrollTrigger: {
  //   trigger: ".section1>h1",
  //   scroller: "#main",
  //   // markers:true
  // },
  ease: Expo.easeInOut,
  y:'50',
  duration:2,
  opacity:1

})

.to('.section1>h3',{
  ease: Expo.easeInOut,
  y:'15',
  duration:1,
  opacity:1
})
.to('.section1>p',{
  ease: Expo.easeInOut,
  y:'15',
  duration:1,
  opacity:1
})
.to('.section1>h5',{
  ease: Expo.easeInOut,
  y:'15',
  duration:1,
  opacity:1
});

gsap.from(".section_image>img", {
  scrollTrigger: {
    trigger: ".section_image>img",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  ease: Expo.easeInOut,

});

gsap.to(".section3>p", {
  scrollTrigger: {
    trigger: ".section3>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1
});

gsap.to(".section4>h5", {
  scrollTrigger: {
    trigger: ".section4>h5",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20'
});

gsap.to(".section4>.section4_line", {
  scrollTrigger: {
    trigger: ".section4>.section4_line",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  width:'80%'
});

gsap.to(".section4>.section4_firstdiv", {
  scrollTrigger: {
    trigger: ".section4>.section4_firstdiv",
    scroller: "#main",
    start: "top 90%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20',
  height:'25vh'
});

gsap.to(".section5>p", {
  scrollTrigger: {
    trigger: ".section5>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20'
});

gsap.to(".section5>.section5_firstdiv", {
  scrollTrigger: {
    trigger: ".section5>.section5_firstdiv",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20',
  height:'30vh'
});

gsap.to(".section5_firstdiv_subdiv1>p", {
  scrollTrigger: {
    trigger: ".section5_firstdiv_subdiv1>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:3,
  opacity:1,
  y:'20',
  // height:'30vh'
});

gsap.to(".section5_firstdiv_subdiv2>p", {
  scrollTrigger: {
    trigger: ".section5_firstdiv_subdiv2>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:3,
  opacity:1,
  y:'20',
  // height:'30vh'
});

gsap.to(".section6>.overlay>p", {
  scrollTrigger: {
    trigger: ".section6>.overlay>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20',
  // height:'30vh'
});

gsap.to(".section7>p", {
  scrollTrigger: {
    trigger: ".section7>p",
    scroller: "#main",
    start: "top 60%",
    // markers:true
  },
  ease: Expo.easeInOut,
  duration:2,
  opacity:1,
  y:'20',
  // height:'30vh'
});













