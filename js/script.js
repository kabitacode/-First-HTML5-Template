// Jquery toggle menu
$(document).ready(function(){
    $('.toggle').click(function(){
      $('ul').slideToggle();
    })
  })

  $(window).scroll(function (){
    if ($(window).scrollTop() >= 50){
        $('.top-nav').css('background','rgba(12,12,12,0.85)');

    }else{
        $('.top-nav').css('background','transparent');
    }
  })

  // FlowType
$('body').flowtype({
  minimum   : 500,
  maximum   : 1200,
  minFont   : 12,
  maxFont   : 40,
  fontRatio : 30
});

$('article').flowtype({
    fontRatio : 36
});

$('#main-header').function({
  maxFont : 40,
  minimum : 20,
});
