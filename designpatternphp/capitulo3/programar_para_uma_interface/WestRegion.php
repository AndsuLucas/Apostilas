<?php 

include_once './IAbstract.php';

class WestRegion extends IAbstract
{
	protected function giveCost(): float
	{
		$solarSavings = 2;
		$this->valueNow = 205.54 / $solarSavings;

		return $this->valueNow;
	}

	protected function giveCity(): string
	{
		return "Marília";
	}
}