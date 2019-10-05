<?php
require_once "./MobileSniffer.php";

class MobileSnifferClient
{
	private $mobileSniffer;

	/** adaptado **/
	public function  __construct()
	{
		$this->mobileSniffer = new MobileSniffer();
		
		echo "Device :". $this->mobileSniffer->findDevice();
		echo "Browser :". $this->mobileSniffer->findBrowser();
	}
}

$trigger = new MobileSnifferClient();