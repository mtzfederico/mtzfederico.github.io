<?php
$ip = $_SERVER['REMOTE_ADDR'];
$hostaddress = gethostbyaddr($ip);
$myObj->ip =  $ip;
$myObj->host = $hostaddress;

$myJSON = json_encode($myObj);

echo $myJSON;
?>
