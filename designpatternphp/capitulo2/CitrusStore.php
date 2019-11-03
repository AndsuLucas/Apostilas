<?php 
include_once "IProduct.php";

class CitrusStore implements IProduct
{
	public function apples()
	{
		echo "apples";
	}

	public function oranges()
	{
		echo "oranges";
	}
}