<?php 

require_once "IConnectionInterface.php";

class DatabaseConnection implements IConnectInfo
{	
	/** Fazendo uso das constantes da interface **/
	private $host = IConnectInfo::HOST;
	private $charset = IConnectInfo::CHARSET;
	private $dbname = IConnectInfo::DBNAME;
	private $root = IConnectInfo::ROOT;
	private $psswd = IConnectInfo::PSSWD;

	public function testConnection()
	{	
		try {
			$pdoObject = new PDO("mysql:host={$this->host};charset={$this->charset};dbname={$this->dbname}", $this->root, $this->psswd);		
		} catch (PDOException $e) {
			echo $e->getMessage();
		}
	

	}
}

$database = new DatabaseConnection();
$database->testConnection();