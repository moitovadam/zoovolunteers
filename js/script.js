$(document).ready(function () {
    $('.mobile-menu').on("click", function () {
        $(this).toggleClass('mobile-menu-active');

        $('.menu-btn').toggleClass('menu-btn-active');
        $('.menu-click').toggleClass('menu-click-active');

    })
});