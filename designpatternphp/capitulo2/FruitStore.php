<?php 

include_once "IProduct.php";

class FruitStore implements IProduct
{
	public function apples()
	{
		return "FruitStore Apples";
	}

	public function oranges()
	{
		return "FruitStore Oranges";
	}
}