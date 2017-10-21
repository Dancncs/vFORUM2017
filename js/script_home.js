jQuery(document).ready(function($) {
	$('.gallery_wrap').cement({
		columns: 5,
		columnMinWidth: 175
	}).show();

	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true
	});

	var s_year = 2017;
	var s_month = 11;
	var s_day = 14;
	var s_hour = 7;
	var s_minute = 30;
	var date_starting = new Date(s_year, s_month - 1, s_day, s_hour, s_minute, 0);
	var time = date_starting.getTime();
	var time_starting = Math.floor(time / 1000);

	var date_now = new Date();
	var time = date_now.getTime();
	var time_now = Math.floor(time / 1000);

	var time_countdown = time_starting - time_now;
	if (time_countdown <= 0) { time_countdown = 0; }

	var clock = $('#clock').FlipClock({
		'clockFace': 'DailyCounter',
		'autoStart': false,
		// 'showSeconds': false,
		'callbacks': {
			'stop': function() {
				$('.countdown').fadeOut();
			}
		}
	});
			    
	clock.setTime(time_countdown);
	clock.setCountdown(true);
	clock.start();
});