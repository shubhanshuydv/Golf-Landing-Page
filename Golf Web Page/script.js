const cursor = document.querySelector("#cursor");
const blrCursor = document.querySelector("#big-cursor");

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"

    blrCursor.style.left = dets.x - 90 +"px"
    blrCursor.style.top = dets.y - 90 +"px"
})

let nav = document.querySelectorAll("#nav h4")
nav.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
    cursor.style.scale = 2.5,
    cursor.style.backgroundColor = "transparent",
    cursor.style.border= ".5px solid #fff"
    })

    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.backgroundColor = "#95C11E",
        cursor.style.border= "0 solid #95C11E"
        })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
});

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -20%",
        end:"top -70%",
        scrub:1,
    }
})

// gsap.to("#about-us img,about-us-in",{
//     y:90,
//     opacity: 0,
//     duration: 1,
//     // stager: 0.5,
//     scrollTrigger: {
//         trigger:"#about-us",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 65%",
//         scrub: 1,
//     },

// });

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.3,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
  });

  gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
  });


  gsap.from(".page4 h3", {
    y: 50,
    scrollTrigger: {
      trigger: ".page4 h3",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });