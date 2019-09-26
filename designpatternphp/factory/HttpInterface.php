<?php 
namespace factory;

interface HttpInterface
{

	public function  __construct();
	public function method();
	public function uri();
	public function fullUri();
}