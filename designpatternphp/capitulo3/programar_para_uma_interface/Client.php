<?php 

include_once './NortRegion.php';
include_once './WestRegion.php';
include_once './IAbstract.php';

class Client 
{
	public function __construct()
	{
		$north = new NortRegion();
		$west = new WestRegion();
		$this->doInterface($north);
		$this->doInterface($west);
	}

	private function doInterface(IAbstract $region): void
	{	
		echo $region->displayShow() . "<br>";
	}
}

$client = new Client();