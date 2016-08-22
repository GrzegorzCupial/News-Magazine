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