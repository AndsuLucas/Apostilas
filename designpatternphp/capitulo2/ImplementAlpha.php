<?php 

require_once "IMethodHolderInterface.php";

class ImplementAlpha implements IMethodHolderInterface
{
	public function getInfo($info) 
	{
		echo "This is NEWS!".$info."<br/>";
	}

	public function sendInfo($info)
	{
		return $info;
	}

	public function calculate($first, $second)
	{
		$calculated = $first + $second;
		return $calculated;
	}

	public function useMethods() 
	{
		$this->getInfo('Info...');
		echo $this->sendInfo('Send info')."<br/>";
		echo "Calculated: ".$this->calculate(2,3)." ..";
	}
	
}

$worker = new ImplementAlpha();
$worker->useMethods();