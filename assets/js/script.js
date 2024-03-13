const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
// back-to-top
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})
// gallery-slider

$('.galley-slider1').slick({
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        }
    ]
});
$('.galley-slider2').slick({
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    ltr: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        }
    ]
});
