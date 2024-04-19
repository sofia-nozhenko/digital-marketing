$(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop: $(target).offset().top,
            },
            "slow"
        );
    });
    $(".companies__slider").slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $(".reviews__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true
    });
});
