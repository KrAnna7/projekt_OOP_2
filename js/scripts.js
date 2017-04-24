// plik scripts.js
$ (function(){ 	
	function Button(text) {
		this.text = text || 'Hello';
	}

	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');// wytłumaczyć dlaczego jest $element? Czy dlatego, że $element to element z drzewa DOM?
			this.$element.text(this.text);
			this.$element.click( function(){
				alert(self.text);
			});
			$('body').append(this.$element);
		}
	}

	var btn1 = new Button('Hello!');

	btn1.create();
});