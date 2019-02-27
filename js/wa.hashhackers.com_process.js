		var WaForm = {
			init: function() {
				this.getForm().addEventListener('submit', this.submit);
			},
			getForm: function() {
				return document.getElementById('waform');
			},
			submit: function( event ) {
				event.preventDefault();
				var msg = WaForm.getMsg( document.getElementById('message').value ),
					phone = document.getElementById('phone').value;

				if (WaForm.isMobile()) {
					window.open('whatsapp://send?phone=' + phone + '&text=' + msg, '_blank');
				} else {
					window.open('https://api.whatsapp.com/send?phone=' + phone + '&text=' + msg, '_blank');
				}
			},
			getMsg: function( text ) {
				return encodeURIComponent(text);
			},
			isMobile: function() {
				return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
			}
		};
		WaForm.init(); // init app
