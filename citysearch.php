<?php
	header('Content-Type: text/xml');
	$city = $_POST['city'];
	$cityArray = array('Dublin','New York','Tokyo','Paris');
	
	echo '<?xml version="1.0" encoding=""UTF-8" standalone="yes" ?>';
	echo '<response>';
	
	if(in_array($city,$cityArray)) {
		echo 'The server contains'.$city.'!';	
	} elseif($city=='') {
		echo 'Nothing has been entered';
	} else {
		echo 'Sorry, the server does not contain '.$city.'!';	
	}
	echo '</response>';
?>