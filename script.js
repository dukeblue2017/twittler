$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var u = $('<div class=update>Update</div>')
  u.appendTo($body);

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class=tweet></div>');
    var d = new Date
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + d);
    $tweet.appendTo($body);
    index -= 1;
  }

  $('.tweet').on('mouseenter', function() {
    $(this).addClass('highlight')
  });

  $('.tweet').on('mouseleave', function() {
    $(this).removeClass('highlight')
  });

  $('.tweet').on('click', function() {
    $(this).slideDown()
  });

});
