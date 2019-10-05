<?php

/**
*Princípio da responsablidide única.
*mostrar o dispositivo que está navegando o site (apenas isso :) )
*/

class TellAll
{
	private $userAgent;
	public function __construct()
	{
		$this->userAgent = $_SERVER['HTTP_USER_AGENT'];
		echo $this->userAgent;
	}
}
//incializar uma classe assim não é bom.
$tellNew = new TellAll();