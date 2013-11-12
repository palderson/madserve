$(function () {			   
	Layout.init ();
	Menu.init ();
	Nav.init ();
	
	if ($.fn.dataTable) { $('.data-table').dataTable ({ "bJQueryUI": true,
		"sPaginationType": "full_numbers",
		 }); };
	
	drawChart ();
	
	$(document).bind ('layout.resize', function () {
		drawChart ();
	});
	
	if ($('.chartHelperChart').length < 1) {
		$(document).unbind ('layout.resize');
	}
	
	$('.uniformForm').find ("select, input:checkbox, input:radio, input:file").uniform();
	
	$('.validateForm').validationEngine ();
	
	$('#reveal-nav').live ('click', toggleNav);
	
	$('.notify').find ('.close').live ('click', notifyClose);
	
	$('.tooltip').tipsy ();
});

function notifyClose (e) {
	e.preventDefault ();
	
	$(this).parents ('.notify').slideUp ('medium', function () { $(this).remove (); });
}

function toggleNav (e) {
	e.preventDefault ();
	
	$('#sidebar').toggleClass ('revealShow');
}

function drawChart () {
	$('.chartHelperChart').remove ();
	ChartHelper.visualize ({ el: $('table.stats') });
}