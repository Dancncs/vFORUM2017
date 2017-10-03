jQuery(document).ready(function($) {
	$('.gallery_wrap').cement({
		columns: 5,
		columnMinWidth: 175
	}).show();

	var clock = $('#clock').FlipClock(3600 * 24 * 45, {
		clockFace: 'DailyCounter',
		countdown: true
	});

	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true
	});
});