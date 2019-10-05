<?php 

class MobileSniffer
{
	private $userAgent;
	private $device;
	private $browser;
	private $deviceLength;
	private $browserLength;

	public function  __construct() 
	{
		$this->userAgent = strtolower(
			$_SERVER['HTTP_USER_AGENT']
		);
		$this->device = array(
			'iphone', 'ipad', 'android', 'silk', 'blackberry', 'touch'
		);
		$this->browser = array(
			'firefox', 'chrome', 'opera', 'msie', 'safari', 
			'blackberry', 'trident'
		);
		$this->deviceLength = count($this->device);
		$this->browserLength = count($this->browser);
	}
	/** adaptado **/
	public function findDevice()
	{
		foreach ($this->device as $device) {
			if (preg_match("/$device/", $this->userAgent)) {
				return $device;
			}
		}
	}
	/** adaptado **/
	public function findBrowser()
	{
		foreach ($this->browser as $browser) {
			if (preg_match("/$browser/", $this->userAgent)) {
				return $browser;
			}
		}
	}
}