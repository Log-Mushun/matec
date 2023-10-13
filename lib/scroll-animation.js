import { gsap } from "gsap/dist/gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();
    const driver1Title = document.querySelector('#button-title1');
    const driver2Title = document.querySelector('#button-title2');
    const driver3Title = document.querySelector('#button-title3');
    const driver4Title = document.querySelector('#button-title4');
    {/*First movement*/}
    tl.to(position, {
        x: -0.505,
        y: 8.661,
        z: -35.150,
        scrollTrigger: {
            trigger: '#driver-one',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    tl.to(target, {
        x: -0.002,
        y: 0.198,
        z: 0.026,
        scrollTrigger: {
            trigger: '#driver-one',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
    })
    // {/*second movement*/}
    // tl.to(position, {
    //     x: 0.856,
    //     y: 1.447,
    //     z: 4.651,
    //     scrollTrigger: {
    //         trigger: '#driver-insights',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 2,
    //         immediateRender: false,
    //     },
    //     onUpdate
    // })
    // tl.to(target, {
    //     x: -0.199,
    //     y: -0.348,
    //     z: 0.267,
    //     scrollTrigger: {
    //         trigger: '#driver-insights',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 2,
    //         immediateRender: false,
    //     },
    // })
      {/*third movement*/}
    //   tl.to(position, {
    //     x: 6.758,
    //     y: 0.589,
    //     z: 0.192,
    //     scrollTrigger: {
    //         trigger: '#driverone-functions',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 1,
    //         immediateRender: false,
    //     },
    //     onUpdate
    // })
    // tl.to(target, {
    //     x: -0.119,
    //     y: -0.731,
    //     z: 0.018,
    //     scrollTrigger: {
    //         trigger: '#driverone-functions',
    //         start: "top bottom",
    //         end: "top top",
    //         scrub: 1,
    //         immediateRender: false,
    //     },
    // })

    {/*Fade outs*/}

    gsap.to('.scrolldown', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to('.experience_title', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    })

    {/*fade out 3d viewer*/}
    gsap.to('.webgi-viewer-class', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#dispel-model',
            start: 'top+=100 bottom',
            end: 'top-=300 top',
            scrub: true
        },
    })

    {/*fade ins*/}

    gsap.to('.plus-button1', {
        opacity: 1,
        zIndex: 30,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })

    
    gsap.to('.plus-button2', {
        opacity: 1,
        zIndex: 150,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })

    gsap.to('.plus-button3', {
        opacity: 1,
        zIndex: 150,
        scrollTrigger: {
            trigger: '.bhs',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })

    gsap.to('.plus-button4', {
        opacity: 1,
        zIndex: 150,
        scrollTrigger: {
            trigger: '#closing',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })

    gsap.to(driver1Title, {
        opacity: 1,
        delay:1,
        scrollTrigger: {
            trigger: '#driver-one',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to(driver2Title, {
        opacity: 1,
        delay:1,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to(driver3Title, {
        opacity: 1,
        delay:1,
        scrollTrigger: {
            trigger: '.bhs',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        }
    })

    gsap.to(driver4Title, {
        opacity: 1,
        zIndex: 150,
        scrollTrigger: {
            trigger: '#closing',
            start: 'top+=400 bottom',
            end: 'top top',
            scrub: true
        },
    })


    gsap.to('.driver-insightsclass', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#driver-insights',
            start: 'top+=200 bottom',
            end: 'top top',
            scrub: true
        }
    })

}