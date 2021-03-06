$(document).ready(function() {
	$('.ryu').mouseenter(function() {	
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		// play hadouken sound
		//playHadouken();
		// show hadouken and animate it to the right
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		//$('.hadouken').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '380px');
			}
		);
	})
	.mouseup(function() {
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function (event) {
		if ( event.keyCode == 88 ) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup( function(event) {
		if (event.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});


});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}