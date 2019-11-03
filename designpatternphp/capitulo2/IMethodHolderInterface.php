<?php 

interface IMethodHolderInterface
{
	public function getInfo($info);
	public function sendInfo($info);
	public function calculate($first, $second);
}