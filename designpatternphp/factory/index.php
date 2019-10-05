<?php 
require_once "../vendor/autoload.php";
use factory\HttpFactory;
echo "<pre>";
// $teste = $_SERVER;
var_dump(HttpFactory::request()->getProtocolVersion());
echo "</pre>";
die();