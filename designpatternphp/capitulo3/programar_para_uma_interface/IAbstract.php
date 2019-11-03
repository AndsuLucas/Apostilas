<?php 

abstract class IAbstract
{
	protected $valueNow;

	abstract protected function giveCost(): float;

	abstract protected function giveCity(): string;

	public function displayShow(): string
	{
		$stringCost = (string) $this->giveCost();
		$allTogether = "cost: {$stringCost}, city {$this->giveCity()}";
		return $allTogether;
	}
}