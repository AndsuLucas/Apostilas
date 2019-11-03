<?php 

/* 
usando uma classe abstrata como interface temos a possibilidade de
incluir métodos concretos além dos métodos abstratos (concretos).
Também podemos definir propriedades.
*/

abstract class AbstractTrick
{	
	protected $storehere;
	abstract function trick($whatever);
}