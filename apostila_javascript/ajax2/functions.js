//cep,inputLogradouro,cidade,bairro,estado
const seterAdressInputValues = function(newValue){

	document.querySelector("#inputLogradouro").value = newValue.logradouro;
	document.querySelector("#inputCidade").value = newValue.localidade;
	document.querySelector("#inputBairro").value = newValue.bairro;
	
	document.querySelector("#inputEstado").value = newValue.uf;
	document.querySelector("#inputNumero").value = newValue.ibge;

}