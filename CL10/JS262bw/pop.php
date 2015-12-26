<?php 
// echo "Hello <b>World!</b> <script> alert('Hello');</script>";
	$city = $_REQUEST["city"];
	if ($city=="hsinchu") {
		echo "30 wan";
	} else if ($city=="taipei") {
		echo "300 wan";
	} else {
		echo "No Data";
	}
?>