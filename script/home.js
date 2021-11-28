$(document).ready(function(){
    $(".banner_item:first-child").fadeIn();

    setInterval(function(){
        $('.banner_item:first-child').fadeOut(1000, function() {
           $(this).next(".banner_item").fadeIn(1000).end().appendTo('#home_banner');   
        })
    }, 4000);

});