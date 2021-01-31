(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  });
})(jQuery); 

$(document).ready(function(){
  $('.carousel').carousel( {
    indicators: true
  });
  $('.tabs').tabs();
  $('.materialboxed').materialbox();
  $('.slider').slider();
  $('select').formSelect();
});

