$(document) .ready (function(){
    $('.js--section').waypoint(function(direction){
        if(direction=='down'){
            $('nav').addClass('sticky');
            
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '100px'
    });

});

/*scrool to plans*/

$('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
})

$('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section').offset().top},1500);
})
//scroll on animations
$('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('animated fadeIn');
},{
    offset: '50%'
})

$('.js--wp-2').waypoint(function(){
    $('.js--wp-2').addClass('animated fadeInUp');
},{
    offset: '50%'
})
$('.js--wp-3').waypoint(function(){
    $('.js--wp-3').addClass('animated fadeIn');
},{
    offset: '50%'
})
$('.js--wp-4').waypoint(function(){
    $('.js--wp-4').addClass('animated pulse');
},{
    offset: '50%'
})
//mobile nav
$('.js--nav--icon').click(function(){
    var nav = $('.js--main--nav');
    nav.slideToggle(200);
});
