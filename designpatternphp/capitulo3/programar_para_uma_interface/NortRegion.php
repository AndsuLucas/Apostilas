<?php 

include_once './IAbstract.php';

class NortRegion extends IAbstract
{
	protected function giveCost(): float
	{
		return 3.55;
	}

	protected function giveCity(): string
	{
		return 'Marília';
	}
}