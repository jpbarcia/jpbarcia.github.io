
$(document).ready(function(){
  $('.toggle-button').click(function() {
    $('body').toggleClass('toggle');
  });
  $('.sidebar-wrapper .sidebar-menu a').click(function() {
    $body = $('body');
    if($body.hasClass('toggle')) {
      $body.removeClass('toggle');
    }

  });

});
