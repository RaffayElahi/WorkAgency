document.addEventListener("scroll",()=>{
    const head = document.querySelector("nav")
    const pagetwo = document.querySelector(".page-two")
    const pagetwoBottom = pagetwo.offsetTop + pagetwo.offsetHeight
    console.log(pagetwo.offsetTop)
    if (window.scrollY >= pagetwo.offsetTop && window.scrollY < pagetwoBottom){
        
        head.classList.add('white')
        
    }else{
        
        head.classList.remove('white')
    }
})
var animate = () =>{
    var tl = gsap.timeline()
        tl.to('.yellow',{
        top: "-100%",
        duration:0.5,
        delay:0.5,
        ease: "elastic.out(1,0.3)",
    })
        tl.from('.secondary-yellow',{
        top:'100%',
        duration:0.6,
        delay:0.3,
        ease: "expoScale(0.5,7,none)",
    },'anim')
    tl.to('h1',{
        color: 'black',
        delay: 0.4, 
    },'anim')   
    tl.to('.loader',{
        opacity:0,
        display:'none'
    })
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    gsap.to('.arrow',{
        y:-8,
        stagger:true,
        repeat:-1,
        yoyo:true,
        duration:0.8,
        ease: "power3.out",
    })
}

animate()
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const elem = document.querySelectorAll('h2')
const canvas = document.querySelector('.page-two')
elem.forEach((e)=>{
    e.addEventListener('mouseenter', function(){
        const attr = e.getAttribute("show-img")
        canvas.style.backgroundImage = `url(${attr})`
    })
    
})
const toppage = document.querySelector('.toppage')
toppage.addEventListener('click',function(){
    scroll.scrollTo(0)
})
const navigationTimeLine = gsap.timeline({paused:true, reversed:true})
const cross = document.querySelector('.cross')
navigationTimeLine.to('.cross',{
    rotate:'135 deg',
    duration: 0.4,
    ease: "expoScale(0.5,7,none)",
    
})
navigationTimeLine.to('.navigation',{
    width:'280px',
},'anim')
navigationTimeLine.to('.Gallery',{
    display:'inline-block',
    
},'anim')
navigationTimeLine.from('.Gallery',{
    x:50,
    opacity:0,
    duration:0.5,
    ease: "expoScale(0.5,7,none)",
    delay: 0.1,
},'anim')

cross.addEventListener('click',function(){
    if (navigationTimeLine.reversed()){
        navigationTimeLine.play()
    }else{
        navigationTimeLine.reverse()
    }
})
// const texts = document.querySelectorAll('.link')
// const underlineTimeline = gsap.timeline({paused:true})
// texts.forEach(text=>{
//     underlineTimeline.to(text,{
//         duration:0,
//         onStart: ()=>{
//             gsap.set(text, {
//                 '--underline-width':'0%',
//                 '--underline-left':'50%',
//                 '--underline-transform':'translateX(-50%)',
//             })
//         }
        
//     }).to(text, {
//         duration:0.5,
//         '--underline-width':'100%',
//         '--underline-left':'0%',
//         '--underline-transform':'translateX(0%)',
//         ease: "expoScale(0.5,7,none)",
//     })
// })
const links = document.querySelectorAll('.link');

    // Loop through each element and set up individual animations
    links.forEach(link => {
      // Create a GSAP timeline for each link element
      const tl = gsap.timeline({ paused: true });
      tl.to(link, { 
        duration: 0, 
        onStart: () => {
          gsap.set(link, {
            '--underline-width': '0%',
            '--underline-left': '50%',
            '--underline-transform': 'translateX(-65%)',
          });
        }
      }).to(link, {
        duration: 0.2,
        '--underline-width': '100%',
        '--underline-left': '0%',
        '--underline-transform': 'translateX(0%)',
        ease: 'power1.out',
      });

      // Add hover event listeners for each link element
      link.addEventListener('mouseenter', () => tl.play());
      link.addEventListener('mouseleave', () => tl.reverse());
    });

    // Apply CSS variables to animate the pseudo-element
    gsap.set('.link', {
      css: {
        '--underline-width': '0%',
        '--underline-left': '50%',
        '--underline-transform': 'translateX(-50%)',
      },
    });

    // Update the ::before pseudo-element with the CSS variables
    const styles = `
      .link::before {
        width: var(--underline-width);
        left: var(--underline-left);
        transform: var(--underline-transform);
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

var mobileNavigation = gsap.timeline({paused:true, reversed:true})
const mobileCross = document.querySelector('.mobile-cross')
mobileNavigation.to(mobileCross,{
    rotate:'135 deg',
    duration: 0.2,
    ease: "expoScale(0.5,7,none)",
    
}, 'same')
mobileNavigation.to("#fullscreenDiv", {
    delay:0.2,
    duration: 0.4,
    height: "100%",
    display: "block"
}, 'same')
mobileNavigation.from('.mobile-link',{
    delay:0.3,
    y:50,
    opacity:0,
    duration:0.3,
    stagger:0.3,
})


mobileCross.addEventListener('click',function(){
    if (mobileNavigation.reversed()){
        mobileNavigation.play()
    }else{
        mobileNavigation.reverse()
    }
})

document.querySelectorAll('.mobile-link').forEach(function(btn){
    btn.addEventListener('click', function(event){
        event.preventDefault();
        var targetId = btn.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var ultimate = document.querySelector('.ultimate')
        targetElement.scrollIntoView({ behavior: 'smooth' });
        ultimate.classList.add('full-height')
        mobileNavigation.reverse()
        setTimeout(function() {
            ultimate.classList.remove('full-height')
        }, 2000);
        
    })
    
})

document.querySelectorAll('.link').forEach(function(btn){
    btn.addEventListener('click', function(event){
        event.preventDefault();
        var targetId = btn.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        scroll.scrollTo(targetElement)
        
        
    })
    
})
