// smooth scrolling using jQuery easing functions
$('.js-scroll-trigger').click(function () {
  var target = $(this.hash);
  if (target.length) {

    // animate scxroll, apply time and type of easing
    // try 'easeOutQuint', 'easeOutBounce', 'easeInOutBack', 'easeOutElastic'
    $('html, body').animate({
      scrollTop: (target.offset().top - 54)
    }, 700, 'easeOutQuint');

    // close responsive menu (hamburger menu)
    $('.navbar-collapse').collapse('hide');

    return false;
  }
});

// activate scrollspy to add active class to navbar items
$('body').scrollspy({
  target: '#mainNav',
  offset: 60
});