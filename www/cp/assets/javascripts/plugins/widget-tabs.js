$(function () {
	
	$('.widget-tabs').find ('.tabs a').live ('click', tabClick);
	
	$('.widget-tabs').each (function () {
		var content = $(this).find ('.widget-content');
		
		if (content.length > 1) {
			content.hide ().eq (0).show ();
		}
	});
	
		
	
});

function tabClick (e) {
	e.preventDefault ();
	
	var $this = $(this);
	var id = $this.attr ('href');
	var parent = $this.parents ('.widget');
	
	$this.parent ().addClass ('active').siblings ('li').removeClass ('active');
	
	parent.find ('.widget-content').hide ();
	$(id).show ();
	
}