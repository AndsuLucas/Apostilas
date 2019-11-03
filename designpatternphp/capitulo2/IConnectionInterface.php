<?php 

interface IConnectInfo
{	
	/*
		Uso de constantes na interface.
		Podemos usá-la em quem a implementa
	*/
	const HOST = "localhost";
	const CHARSET = "utf8";
	const DBNAME = 'galery';
	const ROOT = 'root';
	const PSSWD = 'password';

	function testConnection();	
}