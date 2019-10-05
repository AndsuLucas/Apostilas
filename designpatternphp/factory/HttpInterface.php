<?php 
namespace factory;

interface HttpInterface
{
	public function method();
	public function uri();
	public function fullUri();
	public function getProtocolVersion();
}