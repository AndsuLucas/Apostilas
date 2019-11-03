<?php 

include_once "FruitStore.php";
include_once "CitrusStore.php";
include_once "IProduct.php";
class UserProducts 
{
	public function __construct()
	{
		/*instanciando as classes */
		$appleSauce = new FruitStore();
		$orangeJuice = new CitrusStore();
		/* 'aplicando' a interface nelas por meio de uma função */
		$this->doInterface($appleSauce);
		$this->doInterface($orangeJuice);
		/** isso não vai dar certo */
		try {
			$x = 1;
			$this->doInterface($x);
		} catch (Exception $e) {
			echo $e->getMessage();
		}
		
	}
	/* induzindo o tipo [IProduct] */
	function doInterface(IProduct $product)
	{
		echo $product->apples()."<br>";
		echo $product->oranges()."<br>";
	}
}

$userProducts = new UserProducts();