jQuery(document).ready(function($) {
	var toolt = $('.hasTooltip');

	if( $(window).width() < 960 ) {
		toolt.qtip('destroy', true);
	} else {
		toolt.each(function() {
			$(this).qtip({
				// show: 'click',
				// hide: 'click unfocus',
				content: {
					text: $(this).next('div')
				},
				style: {
					classes: 'qtip-bootstrap'
				},
				position: {
					my: 'top left',
					at: 'bottom right',
					target: 'mouse'
					// viewport: $(window)
				}
				// events: {
				// 	visible: function(event, api) {
				// 		$('.qtip').click(function() {
				// 			$('.qtip').hide();
				// 		});
				// 	}
				// }
			});
		});
	}
});