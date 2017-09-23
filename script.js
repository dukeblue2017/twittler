$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var u = $('<div class=update>Double Click Anywhere to Load New Twittles</div>')
  u.appendTo($body);

  var index = streams.home.length - 1;
  var appeared = index
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

  var loadNew = function() {
    console.log('running loadNew')
    while (streams.home.length > appeared) {
      var tweet = streams.home[appeared];
      var $tweet = $('<div class=tweet></div>');
      var d = new Date
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $tweet.prependTo($body);
      appeared ++;
    }
  }

  $('html').on('dblclick', function() {
    console.log('hi')
    loadNew()
  });

  

});
