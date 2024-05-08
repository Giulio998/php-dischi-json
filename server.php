<?php

$string = file_get_contents("dischi.json");

$discList = json_decode($string, true);

$json = json_encode(($discList));

header("Content-type: application/json");
echo $json;
