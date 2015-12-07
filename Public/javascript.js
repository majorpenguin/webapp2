
function clockTime(){

  var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) + 9);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentHours == 24){
		currentHours = "00";
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds;
}
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

