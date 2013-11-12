(function($) {

$.modal = function (config) {
	
	var defaults, options, container, header, close, content, title, overlay;
	
	defaults = {
		 title: ''
		, html: ''
		, ajax: ''
		, width: null
		, overlay: true
		, overlayClose: false
		, escClose: true
	};
	
	options = $.extend (defaults, config);
	
	container = $('<div>', { id: 'modal' });
	header = $('<div>',  { id: 'modalHeader' });
	content = $('<div>', { id: 'modalContent' });
	overlay = $('<div>', { id: 'overlay' });
	title = $('<h2>', { text: options.title });
	close = $('<a>', { 'class': 'close', href: 'javascript:;', html: '&times' });

	container.appendTo ('body');
	header.appendTo (container);
	content.appendTo (container);
	if (options.overlay) {
		overlay.appendTo ('body');
	}
	title.prependTo (header);
	close.appendTo (header);
	
	if (options.ajax == '' && options.html == '') {
		title.text ('No Content');
	}
	
	if (options.ajax !== '') {
		content.html ('<div id="modalLoader"><img src="./img/ajax-loader.gif" /></div>');
		$.modal.reposition ();
		$.get (options.ajax, function (response) {
			content.html (response);
			$.modal.reposition ();
		});
	}
	
	if (options.html !== '') {
		content.html (options.html);
	}
	
	close.bind ('click', function (e) { 
		e.preventDefault (); 
		$.modal.close (); 		
	});
	
	if (options.overlayClose) {
		overlay.bind ('click', function (e) { $.modal.close (); });
	}
	
	if (options.escClose) {
		$(document).bind ('keyup.modal', function (e) {
			var key = e.which || e.keyCode;
			
			if (key == 27) {
				$.modal.close ();
			}			
		});
	}
	
	$.modal.reposition ();
}

$.modal.reposition = function () {
	var width = $('#modal').outerWidth ();		
	var centerOffset = width / 2;	
	$('#modal').css ({ 'left': '50%', 'top': $(window).scrollTop () + 75, 'margin-left': '-' + centerOffset + 'px' });
};

$.modal.close = function () {
	$('#modal').remove ();
	$('#overlay').remove ();
	$(document).unbind ('keyup.modal');
}

function getPageScroll() {
	var xScroll, yScroll;
	
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
		xScroll = self.pageXOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
		yScroll = document.documentElement.scrollTop;
		xScroll = document.documentElement.scrollLeft;
	} else if (document.body) {// all other Explorers
		yScroll = document.body.scrollTop;
		xScroll = document.body.scrollLeft;
	}
	
	return new Array(xScroll,yScroll);
}

})(jQuery);