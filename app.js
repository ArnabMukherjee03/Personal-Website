const hamburger = document.querySelector(".hamburger");
var navlinks = document.querySelector('.nav-links');
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-nav");
  navlinks.classList.toggle("active-nav");
});
const text = document.querySelector(".second-text");
const textLoad = ()=>{
    setTimeout(()=>{
        text.textContent = "Student";
    },0);
    setTimeout(()=>{
        text.textContent = "Web Developer";
    },4000);
}
textLoad();
setInterval(textLoad,8000);

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.dot-btn');
let currentslide = 1;
var manualnav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
    btns.forEach((btn, i)=>{
        btn.addEventListener("click",()=>{
            manualnav(i);
            currentslide = i;   
        });
    });

    var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;
        var repeater = ()=>{
            setTimeout(function(){
                [...active].forEach((activeSlide)=>{
                    activeSlide.classList.remove('active');
                })
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;
                if(slides.length == i){
                    i = 0;
                }
                if(i >= slides.length){
                    return;
                }
                repeater();
            },5000)
        }
        repeater();
    }

    repeat();


    const darkButton = document.querySelector(".dark-button");
    const moonIcon = document.querySelector(".fa-moon");
    const sunIcon = document.querySelector(".fa-sun");
    darkButton.onclick = ()=>{
        document.body.classList.toggle("add-dark");
        if(document.body.classList.contains("add-dark")){
           moonIcon.style.display = "none";
           sunIcon.style.display = "block";
        }else{
            moonIcon.style.display = "block";
            sunIcon.style.display = "none";
        }

    }

