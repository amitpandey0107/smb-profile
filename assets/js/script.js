$(document).ready(function() {

	/* STICKY MENU */
	jQuery(function(){
	    jQuery(window).scroll(function() {
	        if (jQuery(this).scrollTop() >= 100) {
	            jQuery('.siteHeader').addClass('stickyTop');
	        }
	        else {
	            jQuery('.siteHeader').removeClass('stickyTop');
	        }
	    });
	});


})