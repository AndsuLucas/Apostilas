<?php  
require_once "./AbstractTrick.php";
/*
Herdando da nossa interface.
*/
class Trick extends AbstractTrick
{
	public function trick($whatever)
	{
		$this->storehere = "An Abstract method";
		return $whatever . $this->storehere;
	}
}