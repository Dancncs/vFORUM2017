jQuery(document).ready(function($) {
	var dropdown = $('.toggle, .main_nav'),
			contestpane = $('.sidebarHandle, .contest');

	// Add class to li that has sub list
	$('.main_nav li:has(ul)').addClass('has-child');

	// Toggle menu
	$('.toggle').click(function() {
		if(dropdown.hasClass('active')) {
			dropdown.removeClass('active');
		} else {
			dropdown.addClass('active');
		};

		$('.has-child').removeClass('dropdown');
	});

	// Dropdown menu
	var windowWidth = $(window).width();
		if(windowWidth < 980) {
			$('.has-child').click(function() {
				if($(this).hasClass('dropdown')) {
					$(this).removeClass('dropdown');
				} else {
					$(this).addClass('dropdown');
				}
			});
		}

	// Contest Panel
	$('.sidebarHandle').click(function() {
		if(contestpane.hasClass('slideOut')) {
			contestpane.removeClass('slideOut');
		} else {
			contestpane.addClass('slideOut');
		}
	});

	// Fixed Sidebar
	$(document).scroll(function() {
		var fixPos = $(this).scrollTop();
		if(fixPos > 300) {
			$('.sidebar').css({
				"position": "fixed",
				"top": "50px"
			});
		} else {
			$('.sidebar').removeAttr('style');
		}
	});
});