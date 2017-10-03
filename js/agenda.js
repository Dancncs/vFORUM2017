jQuery(document).ready(function($) {

	var tab = $('.session h2'),
			agenda = $('.session .tableWrap');

	agenda.hide();
	tab.click(function() {
		var elem = $(this).next(agenda);
		agenda.not(elem).slideUp();
		tab.removeClass("active");
		$(this).addClass("active");
		elem.slideToggle();
	});

});