$(document).ready(function () {
    $('#photos').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class=\"fas fa-arrow-left\"></i>", "<i class=\"fas fa-arrow-right\"></i>"],
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
$(document).ready(function () {
    $('#videos').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class=\"fas fa-arrow-left\"></i>", "<i class=\"fas fa-arrow-right\"></i>"],
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 1000000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
});

let btn = document.querySelector('.topbutton');

//
function magic() {
    if (window.pageYOffset > 200) {
        btn.style.opacity = '1'
    } else {
        btn.style.opacity = '0'
    }
}

//
btn.onclick = function () {
    window.scrollTo(0, 0)
};

// When scrolling, we run the function
window.onscroll = magic;

document.getElementById('footerDate').appendChild(document.createTextNode('Кыргызстан. Бишкек. '+new Date().getFullYear()));