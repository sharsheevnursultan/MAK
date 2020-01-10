$(document).ready(function () {
    $('#photos').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class=\"fas fa-arrow-left\"></i>", "<i class=\"fas fa-arrow-right\"></i>"],
        dots: false,
        autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:10000,
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
        autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:1000000,
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