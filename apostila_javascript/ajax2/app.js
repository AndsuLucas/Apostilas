(function(){
	const makeCepRequest = function(parameter){
		const param = parameter.replace(/[^0-9]+/g, "");
		let url = `https://viacep.com.br/ws/${parameter}/json/`;

		let promise = fetch(url)
					.then(response => {return response})
					.then(response => {return response.json()})
		
		return promise;
	}

	/**
	*
	*/
	document.querySelector("#inputCEP").addEventListener("change", function(){
		makeCepRequest(this.value).then( response => { seterAdressInputValues(response) } );
		return;
	});

})();