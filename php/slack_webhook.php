<?php

if( $_POST['token'] == 'K5cKfuWoMPdq1ADTfg4Dq7Rs'){

$time = $_POST['timestamp'];
$name = "<h3>" . $_POST['user_name'] . "</h3>";
$message = "<p>" . $_POST['text'] . "</p>";

$line = "<div timestamp='" . $time . "'>" . $name . $message . "</div>";

$buffer = file_get_contents('BlueprintAnnounce.log');
$newfile = $line . $buffer;
file_put_contents('BlueprintAnnounce.log', $newfile, FILE_TEXT);

} else {
	echo "Invalid ID.";
}

?>