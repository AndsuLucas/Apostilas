<?php 

namespace factory;

abstract class HttpFactory
{	
	public function request()
	{
		return new Http();
	}

	
}