
$(document).ready(function(){
       $("body").mousewheel(function(event, delta) {
          this.scrollLeft -= (delta * 30);
          //event.preventDefault();
       });
    /*setTimeout(function(){
       window.location.reload(1);
    }, 5000);*/
    mobileNav();
    window.randomize = function() {
    	$('.skill-container').attr('data-skill', Math.floor(Math.random() * 100));
      setTimeout(window.randomize, 3000);
    }
    setTimeout(window.randomize, 3000);
    $('.skill-container').click(window.randomize);
});

function mobileNav() {
  $('.small-nav-toggle').on('click', function(){
    var status = $('header').hasClass('is-open');
    if(status){ $('header').removeClass('is-open'); }
    else {
      $('header').addClass('is-open');
      //var height = $(document).height();
      //$('#overlay').css('height', height);
      //$('body').css('overflow', 'hidden');
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
