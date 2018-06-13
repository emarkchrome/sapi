class Stopwatch {
  constructor() {
    this.time = 0;
  }
  start() {
    var stopwatch = this;
    this.interval = setInterval(function() {
      stopwatch.time = stopwatch.time + 1000;
      console.log(stopwatch.time/1000 + 's');
    }, 1000);
  }
  stop() {
    clearInterval(this.interval);
    console.log('final result: ' + this.time/1000 + 's')
  }
  reset() {
    this.time = 0;
    document.getElementById('num').innerHTML = '0s';
    console.info('Stopwatch Reset!');
  }
	getTimeInSeconds() {
		return this.time/1000;
	}
}

var stopwatch = new Stopwatch();

$(document).ready(function() {

	$('body').fadeIn();

	$('.starttest').click(function() {
		var instructions = document.getElementsByClassName('instructions')[0];
		var test = document.getElementsByClassName('test')[0];
		instructions.style.transform = 'translateY(-100vh)';
		test.style.transform = 'translateY(0)';

		stopwatch.start();

		$('.stoptest').click(function() {
			stopwatch.stop();

			var readingSpeedInWordsPerMinute = Math.round(200 / (stopwatch.getTimeInSeconds() / 60) + 3);
			console.log(`[Sapi] Reading speed is ${readingSpeedInWordsPerMinute}wpm.`)
			var readingSpeedText = document.getElementsByClassName('reading-speed')[0];
			readingSpeedText.innerHTML = readingSpeedInWordsPerMinute;
			chrome.storage.sync.set({ readingSpeed: readingSpeedInWordsPerMinute });
			var modal = document.getElementsByClassName('modal')[0];
			var stopButton = document.getElementsByClassName('stoptest')[0];
			modal.classList.add('open');

			$('.letsgo').click(function() {
				$('body').fadeOut(function() {

				});
			});

		});

	});

});
