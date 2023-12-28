const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl= gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    .from("#footer",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
