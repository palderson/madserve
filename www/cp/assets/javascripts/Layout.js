var Layout = function () {
	
	var timer, docWidth;
	
	return { init: init, adapt: adapt };
	
	function init () {
		var searchBevel, contentHeaderBevel;
		
		$('html').removeClass ('no-js');
		
		adapt ();
		
		docWidth = $(window).width ();
		
		$(window).resize(function() {
			//console.log ('cache: ' + docWidth);
			//console.log ('live: ' + $(window).width ());
			//console.log ('------------------------');
			
			if (docWidth === $(window).width ()) { 
				//console.log ('Same'); 
				return false; 				
			}
			
		    clearTimeout(timer);
		    timer = setTimeout(adapt, 125);
		});
		
		searchBevel = $('<div>', { id: 'searchBevel' }).appendTo ('#search');
		contentHeaderBevel = $('<div>', { id: 'contentHeaderBevel' }).appendTo ('#contentHeader');		
		
		$('#advancedSearchTrigger').live ('click', advancedClick);
		
		$('#quickNav').find ('li').last ().addClass ('last');
	}

	function advancedClick (e) {
		e.preventDefault ();	
		var search = $(this).parents ('#search');	
		search.find ('#advancedSearchOptions').slideToggle ();
	}
	
	function adapt () {
		var windowWidth, windowHeight, contentWidth, contentHeight, sidebarWidth, gutterWidth, bottomPad, $sidebar, $content;
		
		$sidebar = $('#sidebar');
		$content = $('#content');
		
		windowWidth = $(window).width ();
		windowHeight = $(window).height ();
		
		docWidth = windowWidth;
		
		sidebarWidth = $sidebar.outerWidth ();
		gutterWidth = 20;
		bottomPad = 125;
		
		contentWidth = windowWidth - sidebarWidth - gutterWidth;
		contentHeight = windowHeight + bottomPad;
		
		//$content.css ({ 'min-width': contentWidth });
		//$content.css ({ 'height': $content.outerHeight + 97 });
		
		$(document).trigger ('layout.resize');
		
	}
}();