<?php  
require_once "../vendor/autoload.php";
use abstractFactory\AbstractPerson;

$teste = AbstractPerson::registerStudent("Anderson", 19, 911)->getData();
echo "<pre>";
var_dump($teste);
echo "</pre>";
