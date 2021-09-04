$(document).ready(function() {
	
	/* STICKY NAVIGATION */
    $('.js--section-about-us').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  	  offset: '60px;'
    });
	
	/* SCROLL ON BUTTONS */
	$('.js--scroll-to-menu').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-menu').offset().top}, 1000);
    });
	
	/* NAVIGATION SCROLL */
	$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
	
	/* ANIMATION ON SCROLL */
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset:'50%'
	});
	
	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset:'50%'
	});
	
	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset:'50%'
	});
	
});