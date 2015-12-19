
var timeUpdater;
function tokyoTime(){
	clearInterval(timeUpdater); // The clear interval will kill any previously running script 
  timeUpdater = setInterval(function(){ // timeUpdater will allow the time to change when new city is selected 
	var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) + 9);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	// Following if statements account for the current Tokyo time on load and the first digit to display as 0 
	if(currentHours > 23){
		currentHours = currentHours - 24;
	}
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds; 
  }, 200)
  
  var ifrm = document.getElementById('forecast_embed');
  ifrm.src = 'https://forecast.io/embed/#lat=42.3583&lon=-71.0603&name=Tokyo Japan&color=#00aaff&font=Georgia';
  //setInterval(updateTime(currentHours + ":" + currentMinutes + ":" + currentSeconds), 200);
  }
function newyorkTime(){
  clearInterval(timeUpdater);
  
  timeUpdater = setInterval(function(){
	  var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) - 5);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	
	if(currentHours > 23){
		currentHours = currentHours - 24;
	}
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds;  
  }, 200);
	
    var ifrm = document.getElementById('forecast_embed');
    ifrm.src = 'https://forecast.io/embed/#lat=40.790143&lon=-73.957901&name=New York City&color=#00aaff&font=Georgia';
  
  }
function saopauloTime(){
	clearInterval(timeUpdater);
  timeUpdater = setInterval(function(){
	var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) - 2);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	
	if(currentHours > 23){
		currentHours = currentHours - 24;
	}
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds; 
  }, 200)
  
  var ifrm = document.getElementById('forecast_embed');
  ifrm.src = 'https://forecast.io/embed/#lat=-23.514256&lon=-46.647949&name=Sao Paulo Brazil&color=#00aaff&font=Georgia';
 
  }
  function seoulTime(){
	clearInterval(timeUpdater);
  timeUpdater = setInterval(function(){
	var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) + 9);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	
	if(currentHours > 23){
		currentHours = currentHours - 24;
	}
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds; 
  }, 200)
  
  var ifrm = document.getElementById('forecast_embed');
  ifrm.src = 'https://forecast.io/embed/#lat=37.542655,&lon=126.973801&name=Seoul South Korea&color=#00aaff&font=Georgia';
 
  }
  function mexicocityTime(){
	clearInterval(timeUpdater);
  timeUpdater = setInterval(function(){
	var currentTime = new Date ( );

  var currentHours = (currentTime.getHours ( ) - 6);
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
	
	if(currentHours > 23){
		currentHours = currentHours - 24;
	}
	if(currentHours < 10){
		currentHours = "0" + currentHours;
	}
	if(currentMinutes < 10){
		currentMinutes = "0" + currentMinutes;
	}
	if(currentSeconds < 10){
		currentSeconds = "0" + currentSeconds;
	}

  var currentTimeString = document.getElementById('clock');

  currentTimeString.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds; 
  }, 200)
  
  var ifrm = document.getElementById('forecast_embed');
  ifrm.src = 'https://forecast.io/embed/#lat=19.421187&lon=-99.121399&name=Tokyo Japan&color=#00aaff&font=Georgia';
 
  }
  // Dynamic scroll taken from Greyscale bootstrap theme 
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

// This function will stop previously running scripts and pass in the time of the selected city
function updateTime(time) {
	var timer = setInterval(function(){
		var currentTimeString = document.getElementById('clock');
		currentTimeString.innerHTML = time;
	}, 200);
}


