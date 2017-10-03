jQuery(document).ready(function() {
	var tab_select = $('.select_tab a');

	$('.group').hide();
	$('.show').show();

	tab_select.click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		tab_select.parent().removeClass('active');
		$(this).parent().addClass('active');
		var target = '#' + $(this).data('target');
		$('.group:not("+target+")').hide();
		$(target).show();
		$('.group').removeClass('show');
		$(target).addClass('show');
	});
});