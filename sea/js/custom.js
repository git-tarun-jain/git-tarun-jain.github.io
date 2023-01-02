(function($) {
    "use strict";

    /* STICKY NAVIGATION */
    $(window).scroll(function() {
        if ($(this).scrollTop() >1) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
    /* STICKY NAVIGATION */

     /* Go up */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 800) {
            jQuery(".go-up").css("bottom", "0px");
        } else {
            jQuery(".go-up").css("bottom", "-60px");
        }
    });
    jQuery(".go-up").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    /* imgpopup */
     $(document).ready(function() {
      $(".imgpopup").magnificPopup({
            type: "image",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
            gallery: {
              enabled: true
            }
      });
    });
    
    //Add class Case Box
    $(".open_info").on("click", function() {
		var this_id = $(this).data('id');
		$(".popup_info_"+this_id).addClass("active");
    });
    //Remove Class
    $(".close_info").on("click", function() {
		var this_id = $(this).data('id');
		$(".popup_info_"+this_id).removeClass("active");
    });
    
	/* --- Scroll Animation ---*/
    $('.section_scroll').bind('click', function(e) {
      var anchor = $(this);
      if($(window).outerWidth() < 768){
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top  - 62
          }, 1200);
      }
      else{
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 80
          }, 1200);
      }
       e.preventDefault();
   });
    
})(jQuery); 