var Nav = function () {
	
	return { init: init, open: open };
	
	function init () {
		$('li.nav').each (function () {		
			var li, a, dropdown;
			li = $(this);
			a = li.find ('a').eq (0);						
			dropdown = li.find ('.subNav');
			
			if (dropdown.length > 0) {
				a.append ('<span class="dropdownArrow"></span>');
				li.addClass ('dropdown');
				a.bind ('click',navClick);
			}
		});
		
		var active = $('li.nav.active');
		
		if (active.is ('.dropdown')) {
			var id = active.attr ('id');
			
			active.addClass ('opened');
			active.find ('.subNav').show ();
		}
	}
	
	function open (id) {
		var el = $('#' + id)
		,	sub = el.find ('.subNav');
		
		el.addClass ('opened');
		sub.slideToggle ();
	}
	
	function navClick (e) {
		e.preventDefault ();
		
		var li = $(this).parents ('li');		
		
		if (li.is ('.opened')) { 
			closeAll ();			
		} else { 
			closeAll ();
			li.addClass ('opened').find ('.subNav').slideDown ();			
		}
		
		//closeAll ();
		//$(this).parents ('li.nav').addClass ('opened').find ('.subNav').slideToggle ();
	}
	
	function closeAll () {
		var subnav = $('.subNav');
		
		subnav.slideUp ().parents ('li').removeClass ('opened');
	}
}();