<?php 

namespace abstractFactory;

class Student
{
	public function __construct($name, $age, $rm)
	{
		$this->name = $name;
		$this->age =  $age;
		$this->rm = $rm;
	}

	/**
	*Retorna os dados do aluno
	*@return array 
	*/
	public function getData(): array
	{	
		$dataStudent = [];
		
		foreach ($this as $key => $value) {
			$dataStudent[$key] = $value;
		}

		return $dataStudent;
	}
}