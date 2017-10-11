jQuery(document).ready(function($) {
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

	var top_tab_select = $('.top_tab a');

	$('.top_group').hide();
	$('.top_show').show();

	top_tab_select.click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		top_tab_select.parent().removeClass('active');
		$(this).parent().addClass('active');
		var target = '#' + $(this).data('target');
		$('.top_group:not("+target+")').hide();
		$(target).show();
		$('.top_group').removeClass('show');
		$(target).addClass('show');
	});
});