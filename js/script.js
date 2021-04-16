const mySwiper = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
        delay: 622000,
    },
    cubeEffect: {
        slideShadows: false,
    }
});

window.onscroll = function () {
    headerLimp()
};

let menu = document.getElementById("menu-desctop");
let menuMobile = document.querySelector('.navigation');
let menuHeight = menu.offsetTop;


function headerLimp() {
    if (screen.width > 768) {
        if (window.pageYOffset >= menuHeight) {
            menu.classList.add("sticky");
            document.body.classList.add('padding');
        } else {
            menu.classList.remove("sticky");
            document.body.classList.remove("padding");
        }
    } else {
        if (window.pageYOffset >= menuMobile.offsetTop) {
            menuMobile.classList.add("sticky-mobile");
            document.body.classList.add('padding-mobile')
        }
    }
}

let swiperone = new Swiper('.tour-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: '1',
    mousewheel: true,
    keyboard: {
        enabled: true,
        onlyInVieport: true
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // autoplay: {
    //     delay: 6000
    // },
    pagination: {
        el: '.swiper-pagination',
    }
});


let swiper = new Swiper('.swiper-cube', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//
// //Плавная прокрутка
// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//
//         const blockID = anchor.getAttribute('href').substr(1);
//
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

//accordion test

// const accordionTrigger = document.querySelectorAll(".accordion-trigger");
// let accordioCcontent = document.querySelector('.accordion-content');
// accordionTrigger.forEach((triggerClick) => {
//     triggerClick.addEventListener('click', () => {
//         const parent = triggerClick.parentNode;
//         console.log(parent);
//         if (parent.classList.contains('accordion-active')) {
//             parent.classList.remove('accordion-active');
//             parent.style.maxHeight = 0;
//         } else {
//             parent.classList.add('accordion-active');
//             parent.style.maxHeight = accordioCcontent.scrollHeight + 'px';
//         }
//     });
// });


