
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var targetTop = target.offset().top - parseInt($('.wrapper').css("margin-top"));
        //alert(targetTop);
        $('html,body').animate({
          scrollTop: targetTop
        }, 600);
        return false;
      }
    }
  });
});

$(document).ready(

  function()
  {
    mobileNav();
    window.addEventListener('scroll', function() {
      var status = $('header').hasClass('is-open');
      if(status){
        $('header').removeClass('is-open');
        $('#overlay').removeClass('cover-all');
      }
     });
    window.randomize = function()
    {
    	$('.skill-container').each(function()
      {
         $(this).attr('data-skill', Math.floor(Math.random() * 100));
      });
      $('.bar').each(function()
      {
        $(this).attr('data-bar', Math.floor(Math.random() * 100));
      });
    }
    //$('.skill-container').click(window.randomize);
});

function mobileNav() {
  $('.small-nav-toggle').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status){
      $('header').removeClass('is-open');
      $('#overlay').removeClass('cover-all');
    }
    else {
      $('header').addClass('is-open');
      $('#overlay').addClass('cover-all');
    }
  });
  $('a').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status)
      $('header').removeClass('is-open');
      $('#overlay').removeClass('cover-all');

  });
  $('#overlay').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status)
      $('header').removeClass('is-open');
      $('#overlay').removeClass('cover-all');
  });
}
