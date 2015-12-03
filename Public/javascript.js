
function clockTime(){

  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );
	
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
}

