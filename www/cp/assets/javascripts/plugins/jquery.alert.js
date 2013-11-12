(function($) {

$.alert = function (config) {
	
	var defaults, options, container, content, actions, close, submit, cancel, title, overlay;
	
	defaults = {
		type: 'default'
		, title: ''
		, text: ''
		, confirmText: 'Confirm'
		, cancelText: 'Cancel'
		, callback: function () {}
		, overlayClose: false
		, escClose: true
	};
	
	options = $.extend (defaults, config);
	
	container = $('<div>', { id: 'alert' });
	content = $('<div>', { id: 'alertContent' });
	close = $('<a>', { 'class': 'close', href: 'javascript:;', html: '&times' });
	actions = $('<div>', { id: 'alertActions' });
	overlay = $('<div>', { id: 'overlay' });
	title = $('<h2>', { text: options.title });
	
	submit = $('<button>', { 'class': 'btn btn-small btn-primary', text: options.confirmText });
	cancel = $('<button>', { 'class': 'btn btn-small btn-quaternary', text: options.cancelText });

	container.appendTo ('body');
	content.appendTo (container);
	close.appendTo (container);
	overlay.appendTo ('body');
	title.prependTo (content);
	
	content.append (options.text);
	
	actions.appendTo (content);
	
	if (options.type === 'confirm') {
		submit.appendTo (actions);
		cancel.appendTo (actions);
	} else {
		submit.appendTo (actions);
		submit.text ('Ok');
	}	
	
	submit.bind ('click', function (e) { 
		e.preventDefault (); 
		
		if (typeof options.callback === 'function') {
			options.callback.apply ();
		}
		
		$.alert.close (); 
	});
	
	submit.focus ();
	
	cancel.bind ('click', function (e) { 
		e.preventDefault (); 
		$.alert.close (); 		
	});
	
	close.bind ('click', function (e) {
		e.preventDefault ();
		$.alert.close ();
	});
	
	if (options.overlayClose) {
		overlay.bind ('click', function (e) { $.alert.close (); });
	}
	
	if (options.escClose) {
		$(document).bind ('keyup.alert', function (e) {
			var key = e.which || e.keyCode;
			
			if (key == 27) {
				$.alert.close ();
			}			
		});
	}
	
	
}

$.alert.close = function () {
	$('#alert').remove ();
	$('#overlay').remove ();
	$(document).unbind ('keyup.alert');
}

})(jQuery);