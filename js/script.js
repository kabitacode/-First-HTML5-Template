$(document).ready(function(){
    $('.toggle').click(function(){
      $('ul').slideToggle(1555);
    })
  })

  $(window).scroll(function (){
    if ($(window).scrollTop() >= 50){
        $('.top-nav').css('background','rgba(12,12,12,0.85)');

    }else{
        $('.top-nav').css('background','transparent');
    }
  })