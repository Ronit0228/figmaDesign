
function smoothScrolling(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
smoothScrolling();

function navAnimation(){
    gsap.from(".nlink",{
        stagger: .2,
        duration: 1,
        opacity: 0,
        y: 10,
        ease: Power3
    });
}
navAnimation();

function homeAnimation(){
    Shery.textAnimate(".headings h1", {
        style: 2,
        y: 10,
        delay: 0.1,
        duration: 3,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });
    
    gsap.from(".anim1",{
        y: 50,
        stagger: .3,
        opacity: 0,
        duration: 1,
        ease: Power4
    });
    
    Shery.imageEffect(".img-text img",{
        style: 3,
        config: { 
            "uFrequencyX":{"value":12.21,
            "range":[0,100]},
            "uFrequencyY":{"value":9.16,"range":[0,100]},
            "uFrequencyZ":{"value":19.85,"range":[0,100]},
            "geoVertex":{"range":[1,64],"value":22.64},
            "zindex":{"value":-9996999,"range":[-9999999,9999999]},
            "aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},
            "shapePosition":{"value":{"x":0,"y":0}},
            "shapeScale":{"value":{"x":0.5,"y":0.5}},
            "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
            "shapeRadius":{"value":0,"range":[0,2]},
            "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
            "gooey":{"value":false},"infiniteGooey":{"value":false},
            "growSize":{"value":4,"range":[1,15]},
            "durationOut":{"value":1,"range":[0.1,5]},
            "durationIn":{"value":1.5,"range":[0.1,5]},
            "displaceAmount":{"value":0.5},
            "masker":{"value":true},
            "maskVal":{"value":1.31,"range":[1,5]},
            "scrollType":{"value":0},
            "noEffectGooey":{"value":true},
            "onMouse":{"value":1},
            "noise_speed":{"value":0.2,"range":[0,10]},
            "metaball":{"value":0.2,"range":[0,2]},
            "discard_threshold":{"value":0.5,"range":[0,1]},
            "antialias_threshold":{"value":0.002,"range":[0,0.1]},
            "noise_height":{"value":0.5,"range":[0,2]},
            "noise_scale":{"value":10,"range":[0,100]} 
        },
    });
    
    Shery.imageEffect(".threeInone img",{
        style: 5,
        config:{
            "a":{"value":1.6,"range":[0,30]},
            "b":{"value":-0.48,"range":[-1,1]},
            "zindex":{"value":-9996999,"range":[-9999999,9999999]},
            "aspect":{"value":0.7310108509423187},
            "ignoreShapeAspect":{"value":true},
            "shapePosition":{"value":{"x":0,"y":0}},
            "shapeScale":{"value":{"x":0.5,"y":0.5}},
            "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
            "shapeRadius":{"value":0,"range":[0,2]},
            "currentScroll":{"value":0},
            "scrollLerp":{"value":0.07},
            "gooey":{"value":false},
            "infiniteGooey":{"value":false},
            "growSize":{"value":4,"range":[1,15]},
            "durationOut":{"value":1,"range":[0.1,5]},
            "durationIn":{"value":1.5,
            "range":[0.1,5]},
            "displaceAmount":{"value":0.5},
            "masker":{"value":true},
            "maskVal":{"value":1,
            "range":[1,5]},
            "scrollType":{"value":0},
            "geoVertex":{"range":[1,64],"value":1},
            "noEffectGooey":{"value":true},
            "onMouse":{"value":1},
            "noise_speed":{"value":0.2,"range":[0,10]},
            "metaball":{"value":0.2,"range":[0,2]},
            "discard_threshold":{"value":0.5,"range":[0,1]},
            "antialias_threshold":{"value":0.002,
            "range":[0,0.1]},
            "noise_height":{"value":0.5,"range":[0,2]},
            "noise_scale":{"value":10,"range":[0,100]}
        },
    });
    
    gsap.from(".img-text img",{
        y: "70",
        opacity: 0,
        duration: 2,
        ease: Expo,
    });
    
    gsap.from(".susimgwrapper img",{
        y: "70",
        opacity: 0,
        duration: 2,
        ease: Expo,
    });
};
homeAnimation();

function bannerAnimation(){
    Shery.imageEffect(".imgleft",{
        style: 5,
        config: {
            "a":{"value":0.46,"range":[0,30]},
            "b":{"value":-0.88,"range":[-1,1]},
            "zindex":{"value":-9996999,"range":[-9999999,9999999]},
            "aspect":{"value":2.015052619873275},
            "ignoreShapeAspect":{"value":true},
            "shapePosition":{"value":{"x":0,"y":0}},
            "shapeScale":{"value":{"x":0.5,"y":0.5}},
            "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
            "shapeRadius":{"value":0,"range":[0,2]},
            "currentScroll":{"value":0},
            "scrollLerp":{"value":0.07},
            "gooey":{"value":true},
            "infiniteGooey":{"value":true},
            "growSize":{"value":4,
            "range":[1,15]},
            "durationOut":{"value":1,"range":[0.1,5]},
            "durationIn":{"value":1.5,
            "range":[0.1,5]},"displaceAmount":{"value":0.5},
            "masker":{"value":true},
            "maskVal":{"value":1.21,"range":[1,5]},
            "scrollType":{"value":0},
            "geoVertex":{"range":[1,64],"value":1},
            "noEffectGooey":{"value":true},
            "onMouse":{"value":1},
            "noise_speed":{"value":0.2,"range":[0,10]},
            "metaball":{"value":0.2,"range":[0,2],
            "_gsap":{"id":36}},
            "discard_threshold":{"value":0.5,"range":[0,1]},
            "antialias_threshold":{"value":0,"range":[0,0.1]},
            "noise_height":{"value":0.49,"range":[0,2]},
            "noise_scale":{"value":10.69,"range":[0,100]}
        },
        gooey: true 
    })
};
bannerAnimation();

function videoAnimation(){
    document.querySelector(".ftext button")
    .addEventListener("mouseover", function(){
        gsap.to(".future video",{
            opacity: 1,
            duration: 1.5,
            ease: Power4
        })
    })
    document.querySelector(".ftext button")
    .addEventListener("mouseleave", function(){
        gsap.to(".future video",{
            opacity: 0,
            duration: 1,
            ease: Power4
        })
    })
}
videoAnimation();



