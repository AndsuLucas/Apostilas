<?php 

namespace factory;

class Http implements HttpInterface
{	
	private $httpOptions;

	public function  __construct() 
	{
		$this->httpArgs = $_SERVER;
	}

	public function method() 
	{
		return $this->httpArgs["REQUEST_METHOD"];
	}

	public function uri()
	{
		return parse_url($this->httpArgs["REQUEST_URI"], PHP_URL_PATH);
	} 

	public function fullUri()
	{
		return $this->httpArgs["REQUEST_URI"];
	}


}