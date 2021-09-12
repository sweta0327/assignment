$('.scrollTo').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - $("header").height()
    }, 100);
    return false;
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$('.swiper-class').slick({
    autoplay: false,
    centerMode: true,

    slidesToShow: 3,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                spaceBetween: 50,
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$(function () {
    $(".js-timeline").Timeline({
        autoplay: false,
        autoplaySpeed: 3000,
        mode: 'horizontal',
        itemClass: 'timeline-item',
        dotsClass: 'timeline-dots',
        
        activeClass: 'slide-active',
        
        prevClass: 'slide-prev',
        
        nextClass: 'slide-next',
        
        startItem: 3, 
        
        dotsPosition: 'bottom',
        
        pauseOnHover: true,
        
        pauseOnDotsHover: false,
        
    });
    move();
    document.getElementsByClassName("timeline-dots")[0].addEventListener("click", function () {
        setTimeout(() => {
            move();
        }, 100);
    });
});

function move() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementsByClassName("progress");
        var width = 1;
        var id = setInterval(frame, 30);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                for (let i = 0; i < elem.length; i++) {
                    elem[i].style.width = width + "%";
                }

            }
        }
    }
}