jQuery(document).ready(function($) {

	var tab = $('.session h2'),
			agenda = $('.session .tableWrap');

	agenda.hide();
	tab.click(function () {
		var elem = $(this).next(agenda);
	  if (!$(this).hasClass("active")) { // If clicked div doesn't have class "active"
	    agenda.slideUp("slow"); // Moved for smoother slide animations
	    tab.removeClass("active");
	    $(this).addClass("active");
	    elem.slideToggle();
	  }
	});

});