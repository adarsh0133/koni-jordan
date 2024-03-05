gsap.to(".circle",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top 0%",
        pin:true,
        scrub:2,
    },
    scale:15, 
})

gsap.to("#lft-nav img",{
    scrollTrigger:{
        trigger:"#page1",
        start:"top 0%",
        scrub:4,
    },
    opacity:1,
})

gsap.to("#page2-img-wrapper",{
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        pin:true,
        scrub:4
    },
    x:100
})

gsap.to("#p3-rgt-img-wrapper",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 0%",
        pin:true,
        scrub:2
    },
    x:"-110%"
})

gsap.to("#page4-img-wrapper",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 0%",
        pin:true,
        scrub:4
    },
    x:100
})

gsap.to("#page4",{
    scrollTrigger:{
        trigger:"#page4",
        start:"bottom 100%",
        end:"bottom 98%",
        scrub:true
    },
    backgroundColor:"#00FFBA",
})

gsap.to("#page4 h1",{
    scrollTrigger:{
        trigger:"#page4",
        start:"bottom 100%",
        end:"bttom 100%",
        scrub:true
    },
    color:"#000",
})

gsap.to("#p5-rgt-img-wrapper",{
    scrollTrigger:{
        trigger:"#page5",
        start:"top 0%",
        pin:true,
        scrub:2
    },
    x:"-110%"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        start:"bottom 100%",
        end:"bottom 99%",
        // scrub:true,
        // markers:true
    }
})

tl.to("#page6",{
    backgroundColor:"yellow",
})
.to("#page6 h1",{
    color:"#000",
})
.to("#e1",{
    top:"25%",
    left:"80%",
    display:"initial",
},"s1")
.to("#e2",{
    top:"80%",
    left:"25%",
    display:"initial",
},"s1")
.to("#e3",{
    top: "5%",
    left: "50%",
    display:"initial",
},"s1")
.to("#e4",{
    top: "90%",
    left: "50%",
    display:"initial",
},"s1")
.to("#e5",{
    top: "20%",
    left: "20%",
    display:"initial",
},"s1")
.to("#e6",{
    top: "80%",
    left: "80%",
    scale:1,
    display:"initial",
},"s1")
.to("#page6 #kiss",{
    delay:.5,
    display:"initial",
})