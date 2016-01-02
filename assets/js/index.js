
$(document).ready(

  function()
  {
    $("body").mousewheel(
    function(event, delta)
    {
      this.scrollLeft -= (delta * 30);
      //event.preventDefault();
    });
    /*setTimeout(function(){
       window.location.reload(1);
    }, 5000);*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });
    mobileNav();

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
    if(status){ $('header').removeClass('is-open'); }
    else {
      $('header').addClass('is-open');
    }
  });
  $('a').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status)
      $('header').removeClass('is-open');
  });
  $('#overlay').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status)
      $('header').removeClass('is-open');
  });
}
