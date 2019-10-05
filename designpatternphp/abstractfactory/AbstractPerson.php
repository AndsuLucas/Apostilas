<?php 

namespace abstractFactory;
use abstractFactory\Student;
// use Teacher;

abstract class AbstractPerson
{
	
	
	/**
	*@param string $name Nome do Aluno
	*@param int $age Idade do Aluno
	*@param int $rm Código de identificação do aluno
	*@return Student
 	*/
	public function registerStudent($name, $age, $rm): Student
	{	
		return new Student($name, $age, $rm);
	}


}