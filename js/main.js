// 1. SCROLLING BACKGROUND



// speed in milliseconds
var scrollSpeed = 12;

// set the default position
var current = 0;

// set the direction
var direction = 'h';

function bgscroll() {

	// 1 pixel row at a time
	current -= 1;

	// move the background with backgrond-position css properties
	$('body').css("backgroundPosition", (direction == 'h') ? current + "px 0" : "0 " + current + "px");

}

//Calls the scrolling function repeatedly
setInterval("bgscroll()", scrollSpeed);




// 2. Countdown Time

var end = new Date('12/01/2017 12:00 AM');
//                  MM/DD/YYYY HH:MM AM

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {

		clearInterval(timer);
		document.getElementById('countdown').innerHTML = 'The Time Is Now!';

		return;
	}
	var days = Math.floor(distance / _day);
	var hours = Math.floor((distance % _day) / _hour);
	var minutes = Math.floor((distance % _hour) / _minute);
	var seconds = Math.floor((distance % _minute) / _second);

	document.getElementById('countdown').innerHTML = days + ' Days ';
	document.getElementById('countdown').innerHTML += hours + ' Hours ';
	document.getElementById('countdown').innerHTML += minutes + ' Minutes ';
	document.getElementById('countdown').innerHTML += seconds + ' Seconds ';
}

timer = setInterval(showRemaining, 1000);








// 3. PRELOADER

$(window).load(function () {
	$("#loading").fadeOut(3000);
	//1000 = 1 second
})