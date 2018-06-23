$(document).ready(function() {

	var previousFormValue;

	$('body').fadeIn();

	$('#reading-speed-form-range').on('input', function() {
		var readingSpeedText = document.getElementById('reading-speed-form-text');
		readingSpeedText.value = this.value;
	});

	$('#reading-speed-form-range').change(function() {
		chrome.storage.sync.set({ readingSpeed: this.value });
	});

	$('#reading-speed-form-text').focusin(function(event) {
		this.select();
		previousFormValue = this.value;
	});

	$('#reading-speed-form-text').keypress(function(event) {
		if (event.code == 'Enter') {
			this.blur();
		} else if (event.code.indexOf('Digit') == -1) {
			event.preventDefault();
		}
	});

	$('#reading-speed-form-text').focusout(function() {
		if (this.value == '') {
			this.value = previousFormValue;
		} else {
			var readingSpeedRange = document.getElementById('reading-speed-form-range');
			readingSpeedRange.value = parseInt(this.value);
			chrome.storage.sync.set({ readingSpeed: this.value });
		}
	});

});
