window.addEventListener("keydown", (event) => {
    if (event.key == 'Escape') {
        window.scrollTo({
            top: sec.offsetTop,
        })
        location.reload()
        close()
        close1()
        menu_box1.classList.add('top')
        span1.classList.remove('ani1')
        span2.classList.remove('ani2')

    }
}, true);
window.onscroll = function () { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop; //our scroll
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};


let white_box = document.querySelector('.white_box')
let theme_box = document.querySelector('.tema')
let p_right = document.querySelector('.p_right')
let body = document.querySelector('body')
let header = document.querySelector('header')
let whitee = document.querySelector('.whitee')
let sec11 = document.querySelector('.box_text1')
let catalog = document.querySelector('.catalog')
let cer_title = document.querySelector('.cer_title')
let cer_title12 = document.querySelector('.qwe')

theme_box.addEventListener("click",theme);  

function theme() {
    white_box.classList.toggle('p_right')
    white_box.classList.toggle('p_left')
    white_box.style.transition = 400 + 'ms'
    body.classList.toggle('black1')
    header.classList.toggle('whitee')
    sec1.classList.toggle('whitee')
    sec11.classList.toggle('whitee')
    catalog.classList.toggle('whitee')
    cer_title.classList.toggle('whitee')
    cer_title12.classList.toggle('whitee')
    
    
}













let btn_1 = document.querySelector('.btn-1')
let mini_box = document.querySelector('.mini-box')
let cross = document.querySelector('.cross')
let cross1 = document.querySelector('.cross1')
let thank = document.querySelector('.thank')
let mini_btn = document.querySelector('.mini-btn')
let etc = document.querySelector('.etc')
let etc1 = document.querySelector('.etc1')
let etc2 = document.querySelector('.etc2') //ETC
let etc3 = document.querySelector('.etc3')
let etc4 = document.querySelector('.etc4')
let etc5 = document.querySelector('.etc5')
// let etc5 = document.querySelector('.etc5')

let slide_box = document.querySelector('.slide1')
let slide_box1 = document.querySelector('.slide11')
let slide_box2 = document.querySelector('.slide12') //Boxes
let slide_box3 = document.querySelector('.slide13')
let slide_box4 = document.querySelector('.slide14')
let slide_box5 = document.querySelector('.slide15')
// let slide_box5 = document.querySelector('.slide13')

let etc_block = document.querySelector('.etc_block')
let etc1_block = document.querySelector('.etc1_block') //ETC_BOXES
let etc2_block = document.querySelector('.etc2_block')
let etc3_block = document.querySelector('.etc3_block')
let etc4_block = document.querySelector('.etc4_block')
let etc5_block = document.querySelector('.etc5_block')

let etc_close = document.querySelector('.etc_close')
let etc1_close = document.querySelector('.etc1_close') //CLOSE_Boxes
let etc2_close = document.querySelector('.etc2_close')
let etc3_close = document.querySelector('.etc3_close')
let etc4_close = document.querySelector('.etc4_close')
let etc5_close = document.querySelector('.etc5_close')


let cer_box = document.querySelector('.cer_box')


btn_1.addEventListener("click", mini);
cross.addEventListener("click", close)
cross1.addEventListener("click", close1)
mini_btn.addEventListener("click", close2) //cross funk

etc.addEventListener("click", etc_f)
etc1.addEventListener("click", etc1_f) //etc funk
etc2.addEventListener("click", etc2_f)
etc3.addEventListener("click", etc3_f)
etc4.addEventListener("click", etc4_f)
etc5.addEventListener("click", etc5_f)

etc_close.addEventListener("click", etc_close_func)
etc1_close.addEventListener("click", etc1_close_func)
etc2_close.addEventListener("click", etc2_close_func)
etc3_close.addEventListener("click", etc3_close_func)
etc4_close.addEventListener("click", etc4_close_func)
etc5_close.addEventListener("click", etc5_close_func) //clode funk


let about = document.querySelector('.about') //links
let catalog_link = document.querySelector('.catalog_link')
let cer_link = document.querySelector('.cer_link')
let feedback_link = document.querySelector('.feedback_link')
let contact_link = document.querySelector('.contact_link')
let sec = document.querySelector('header')
let sec1 = document.querySelector('.photo-box3')
let sec2 = document.querySelector('.slider-box1')
let sec3 = document.querySelector('.cer_box') //sections
let sec4 = document.querySelector('.feedback')
let sec5 = document.querySelector('.contact')



about.addEventListener("click", jakor)
catalog_link.addEventListener("click", jakor1)
cer_link.addEventListener("click", jakor2)
feedback_link.addEventListener("click", jakor3)
contact_link.addEventListener("click", jakor4)



function jakor() {
    event.preventDefault()
    window.scrollTo({
        top: sec1.offsetTop,
        left: 0,
        behavior: "smooth",

    });
}

function jakor1() {
    event.preventDefault()
    window.scrollTo({
        top: sec2.offsetTop,
        left: 0,
        behavior: "smooth"
    });
}
function jakor2() {
    event.preventDefault()
    window.scrollTo({
        top: sec3.offsetTop,
        left: 0,
        behavior: "smooth"
    },

    );
    sec3.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    })
}
function jakor3() {
    event.preventDefault()
    window.scrollTo({
        top: sec4.offsetTop,
        left: 0,
        behavior: "smooth"
    },

    );
    sec4.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    })
}
function jakor4() {
    event.preventDefault()
    window.scrollTo({
        top: sec5.offsetTop,
        left: 0,
        behavior: "smooth"
    });
}
let about1 = document.querySelector('.about1') //links
let catalog_link1 = document.querySelector('.catalog_link1')
let cer_link1 = document.querySelector('.cer_link1')
let feedback_link1 = document.querySelector('.feedback_link1')
let contact_link1 = document.querySelector('.contact_link1')

about1.addEventListener("click", jakorr)
catalog_link1.addEventListener("click", jakorr1)
cer_link1.addEventListener("click", jakorr2)
feedback_link1.addEventListener("click", jakorr3)
contact_link1.addEventListener("click", jakorr4)



function jakorr() {
    event.preventDefault()
    window.scrollTo({
        top: sec1.offsetTop,
        left: 0,
        behavior: "smooth",

    });
}

function jakorr1() {
    event.preventDefault()
    window.scrollTo({
        top: sec2.offsetTop,
        left: 0,
        behavior: "smooth"
    });
}
function jakorr2() {
    event.preventDefault()
    window.scrollTo({
        top: sec3.offsetTop,
        left: 0,
        behavior: "smooth"
    },

    );
    sec3.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    })
}
function jakorr3() {
    event.preventDefault()
    window.scrollTo({
        top: sec4.offsetTop,
        left: 0,
        behavior: "smooth"
    },

    );
    sec4.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    })
}
function jakorr4() {
    event.preventDefault()
    window.scrollTo({
        top: sec5.offsetTop,
        left: 0,
        behavior: "smooth"
    });
}
function mini() {
    mini_box.classList.toggle('not_active')
}
function close() {
    mini_box.classList.add('not_active')
}
function close1() {
    thank.classList.add('not_active')
    location.reload()
}
function close2() {
    thank.classList.remove('not_active')
    mini_box.classList.add('not_active')
    event.preventDefault()
}
function etc_f() {
    slide_box.classList.toggle('slide1')
    slide_box.classList.toggle('slide_hight')
    etc.classList.toggle('not_active')
    etc_block.classList.toggle('not_active')
    etc_close.classList.toggle('not_active')  //Functions of etc 
    cer_box.classList.add('cer_box_margin')
}
function etc1_f() {
    slide_box1.classList.toggle('slide1')
    slide_box1.classList.toggle('slide_hight')
    etc1.classList.toggle('not_active')
    etc1_block.classList.toggle('not_active')
    etc1_close.classList.toggle('not_active')
    cer_box.classList.add('cer_box_margin')
}
function etc2_f() {
    slide_box2.classList.toggle('slide12')
    slide_box2.classList.toggle('slide_hight')
    etc2.classList.toggle('not_active')
    etc2_block.classList.toggle('not_active')
    etc2_close.classList.toggle('not_active')
    cer_box.classList.add('cer_box_margin')
}
function etc3_f() {
    slide_box3.classList.toggle('slide13')
    slide_box3.classList.toggle('slide_hight')
    etc3.classList.toggle('not_active')
    etc3_block.classList.toggle('not_active')
    etc3_close.classList.toggle('not_active')
    cer_box.classList.add('cer_box_margin')
}
function etc4_f() {
    slide_box4.classList.toggle('slide14')
    slide_box4.classList.toggle('slide_hight')
    etc4.classList.toggle('not_active')
    etc4_block.classList.toggle('not_active')
    etc4_close.classList.toggle('not_active')
    cer_box.classList.add('cer_box_margin')
}
function etc5_f() {
    slide_box5.classList.toggle('slide15')
    slide_box5.classList.toggle('slide_hight')
    etc5.classList.toggle('not_active')
    etc5_block.classList.toggle('not_active')
    etc5_close.classList.toggle('not_active')
    cer_box.classList.add('cer_box_margin')

}
function etc1_close_func() {
    slide_box1.classList.toggle('slide11')
    slide_box1.classList.toggle('slide_hight')
    etc1_block.classList.toggle('not_active')  //close functions
    etc1_close.classList.toggle('not_active')
    etc1.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')
}
function etc2_close_func() {
    slide_box2.classList.toggle('slide12')
    slide_box2.classList.toggle('slide_hight')
    etc2_block.classList.toggle('not_active')
    etc2_close.classList.toggle('not_active')
    etc2.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')
}

function etc_close_func() {
    slide_box.classList.toggle('slide1')
    slide_box.classList.toggle('slide_hight')
    etc_block.classList.toggle('not_active')
    etc_close.classList.toggle('not_active')
    etc.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')

}
function etc3_close_func() {
    slide_box3.classList.toggle('slide13')
    slide_box3.classList.toggle('slide_hight')
    etc3_block.classList.toggle('not_active')
    etc3_close.classList.toggle('not_active')
    etc3.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')
}
function etc4_close_func() {
    slide_box4.classList.toggle('slide14')
    slide_box4.classList.toggle('slide_hight')
    etc4_block.classList.toggle('not_active')
    etc4_close.classList.toggle('not_active')
    etc4.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')
}
function etc5_close_func() {
    slide_box5.classList.toggle('slide15')
    slide_box5.classList.toggle('slide_hight')
    etc5_block.classList.toggle('not_active')
    etc5_close.classList.toggle('not_active')
    etc5.classList.toggle('not_active')
    cer_box.classList.remove('cer_box_margin')
}
let swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 3,
    spaceBetween: 0,
    breakpoints:{
        320:{
          slidesPerView:1,
        },
        420:{
          slidesPerView:2,
        },
        720:{
          slidesPerView:3,
        }
      }
});
let swiper1 = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slidesPerView: 3,
    spaceBetween: 0,
    breakpoints:{
        320:{
          slidesPerView:1,
        },
        420:{
          slidesPerView:2,
        },
        720:{
          slidesPerView:3,
        }
      }
});


let menu_box = document.querySelector('.menu')
let span1 = document.querySelector('.span1')
let span2 = document.querySelector('.span2')

let menu_box1 = document.querySelector('.menu_box1')

menu_box.onclick = () => {
    // span1.classList.remove('margin_botom')
    span1.classList.toggle('ani1')
    span2.classList.toggle('ani2')

    span1.style.transition = 300 + 'ms'
    span2.style.transition = 300 + 'ms'

    menu_box1.classList.toggle('top')
    menu_box1.classList.toggle('top1')
    menu_box1.style.transition = 300 + 'ms'
}


let mod_sl = document.querySelector('.modal-win-sl')
let cer1 = document.querySelector('.cer1')
let cer2 = document.querySelector('.cer2')
let cer3 = document.querySelector('.cer3')
let cer4 = document.querySelector('.cer4')
let crosss2 = document.querySelector('.crosss2')

cer1.onclick = ()=>{
    mod_sl.classList.toggle('mod-active')
  
  }
  
  cer2.onclick = ()=>{
    mod_sl.classList.toggle('mod-active')
  
  }
  cer3.onclick = ()=>{
    mod_sl.classList.toggle('mod-active')
  
  }
  cer4.onclick = ()=>{
    mod_sl.classList.toggle('mod-active')
  
  }
  crosss2.onclick = ()=>{
    
    mod_sl.classList.remove('mod-active')
    
    
  }
  new Swiper(".swiper2", {
    cssMode: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  