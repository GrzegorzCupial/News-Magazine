/*HAMBURGER MENU*/
$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(600);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(600);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});


/*STICKY MENU*/
$("document").ready(function($){
    var nav = $('#sticky-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 225) {
            nav.addClass("sticky-nav");
        } else {
            nav.removeClass("sticky-nav");
        }
    });
});