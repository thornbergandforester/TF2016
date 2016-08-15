$(function() {

	// Match heights for Image & Text Grids
	// media query event handler
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 500px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}
	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {
	    // window width is at least 500px
        $('#work-grid .col-sm-6').matchHeight({
            target: $('#work-grid .double')
        });
        $('#work-grid .block-text').matchHeight({
            target: $('#work-grid .single')
        });
        $('.project-assets .col-sm-6').matchHeight({
            target: $('.project-assets .double')
        });
        $('.project-assets .block-text').matchHeight({
            target: $('.project-assets .single')
        });
	  } else {
	    // window width is less than 500px
	    
	  }

	}

	// Show/Hide Navbar on Scroll
	$(".navbar-fixed-top").autoHidingNavbar({
	  	hideOffset: 35, // "auto" means the navbar height
        animationDuration: 300,
        showOnBottom: false
	});

});