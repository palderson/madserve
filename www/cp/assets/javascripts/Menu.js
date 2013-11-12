var Menu = function () {

	var settings = { outsideClose: false };
	
	return { init: init, close: close };
	
	function init (config) {	
				
		options = $.extend (settings, config);
		
		var $menuContainer = $('.menu-container')
			$menu = $('.menu')
			$topNav = $('#topNav');
			
		$topNav.find ('.menu').each (function () {
			var $this = $(this);
			
			if ($this.parent ().find ('.menu-dropdown').length > 0) {
				$this.append ('<div class="menu-arrow"></div>');
			}
		});
		
		$menu.live ('click', open);
	
		$menuContainer.each (function () {			
			var parent = $(this).parents ('#quickNav')
				, cls = (parent.length > 0) ? $(this).addClass ('menu-type-quicknav') : $(this).addClass ('menu-type-topnav');
					
			$(this)
				.addClass (cls)
				.append ('<div class="menu-top"></div>')
				.insertBefore ('#footer');
		});
		
		$menuContainer.find ('form').live ('submit', function (e) { e.preventDefault (); });
	}
	
	function open (e) {
		e.preventDefault ();
		
		var $this, id, $modal, docWidth, offset, left, top;
		
		$this = $(this);
		id = $this.attr ('href');
		$modal = $(id);
		docWidth = $(document).width ();
		
		$modal.removeClass ('middle right');
		
		if ($modal.is (':visible')) {
			doClose ();
		}
		
		forceClose ();
		
		offset = $this.offset ();
		left = offset.left - 8;
		top = offset.top + $this.outerHeight () + 4;
		
		
		var showRight = docWidth < offset.left + $modal.outerWidth ();
		
		
		
		
		
		if (docWidth < 550) {
			$modal.css ({ left: '50%', top: top, 'margin-left': '-' + $modal.outerWidth () / 2 + 'px' }).addClass ('middle');
		
				$('body').append ('<div id="overlay"></div>');
		} else if (showRight) {
			
			left = offset.left - $modal.outerWidth () + 45;
			
			if (left < 0) {
				$modal.css ({ left: '50%', top: top, 'margin-left': '-' + $modal.outerWidth () / 2 + 'px' }).addClass ('middle');
		
				$('body').append ('<div id="overlay"></div>');
			} else {			
				$modal.css ({ left: left, top: top, 'margin-left': 0 }).addClass ('right');
			}
			
		} else {
			$modal.css ({ left: left, top: top, 'margin-left': 0 });
		}		
		
		
		
		
		
		$modal.show ();		
		$this.parent ().find ('.alert').fadeOut ();		
		$('#overlay').bind ('click', docClick);		
		$modal.find ('.menu-close').bind ('click', close);		
		$(document).bind ('click.menu', docClick);
	}
	
	function docClick (e) {
		if ($(e.target).parents ('.menu-container').length < 1) {
			if (!$(e.target).is ('.menu') && $(e.target).parents ('.menu').length < 1) {				
				doClose ();
			}
		}
	}
	
	function close (e) {
		e.preventDefault ();		
		doClose ();
	}
	
	function doClose () {
		var modal, form;
		
		$(document).unbind ('click.menu');
		
		modal = $('.menu-container:visible');
		modal.fadeOut ('medium', function () { });
		
		form = modal.find ('form');
		
		if (form.length > 0) {
			form[0].reset ();
		}
		
		$('#overlay').fadeOut ('medium', function () { $(this).remove (); });
	}
	
	function forceClose () {
		$('.menu-container').hide ();
		$(document).unbind ('click.menu');
	}
}();