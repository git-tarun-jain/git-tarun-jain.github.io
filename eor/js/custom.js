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
    
})(jQuery); 