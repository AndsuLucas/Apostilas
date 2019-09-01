
/*let ajax = new XMLHttpRequest();

//parametros: 1- verbo, 2- caminho do arquívo/url;
ajax.open("GET", "http://localhost:8000/js/aula.json");
//enviando a requisição;
ajax.send() //caso estejamos enviando algum tipo de dado, mandamos como parametro no send();
*/
//quando o objeto mudar seu estado
//ajax.addEventListener("readystatechange", () => { verificaAjax(ajax) })

const criarElementosDom = (container, tag, ...texto) => {
	[...texto].forEach(registro => {
		let _tag = document.createElement(tag);
		let _texto = document.createTextNode(registro);
		_tag.appendChild(_texto);
		container.appendChild(_tag);
	})

	return container
			
}
const mostrarUsuarios = (template, container, data) => {
	console.time("DOM");
	const fragmento = document.createDocumentFragment();
	
	lista = data.length === undefined ? [data] : data; 
	lista.map(registro => {			
		fragmento.appendChild(
			criarElementosDom(container, "li", registro.id, registro.name, registro.phone, registro.email )
		)

	})
	
	template.appendChild(fragmento);
	
	console.timeEnd("DOM");
	
}

