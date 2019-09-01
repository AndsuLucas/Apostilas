(function() {
    'use strict';
    /*ajax */
    //primeiro método
    const getUser = (id) => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        let ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        //podemos passar parametros aqui
        ajax.send(null);

        ajax.addEventListener("readystatechange", async () => {
            if (ajax.readyState == 4) {
                 if (ajax.status === 200) {
                    const template = document.querySelector("#lista-usuarios");
                    const container = document.createElement("ul");
                    let json = await ajax.response;
                    mostrarUsuarios(template, container, JSON.parse(json));
                    return;
                 }
            }
        });
    }
    getUser(1);

    //SEGUNDO MÉTODO
    const getUserFetch = async (id) => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        let promise = await fetch(url); //retorna sempre uma promise. vou esperar ela retornar algo concreto para continuar (async await)
        if (!promise.ok) {
            throw  new  Error("Erro");
        }
        let json = await promise.json();
        return json;
    }

    getUserFetch(2).then(response => {
        const template = document.querySelector("#lista-usuarios");
        const container = document.createElement("ul");
        mostrarUsuarios(template, container, response);
   })

    //método POST
    const postText = () => {
       
        const ajax = new XMLHttpRequest();
        const url = "https://jsonplaceholder.typicode.com/posts";
        //console.log(data);
        ajax.open("POST", url);
        ajax.send({"title":"teste", "body":"testando", "userId": 100});

        ajax.addEventListener("readystatechange", () => {
            if (ajax.readyState === 4) {
                if (parseInt(ajax.status) > 200 && parseInt(ajax.status) < 400) {
                   console.log(JSON.parse(ajax.response));  
                }else{
                    console.log(ajax.status);
                }
            }
            

        });
    }
    //postText();

    const postTextFetch = async (data) => {
    
        const url = "https://jsonplaceholder.typicode.com/posts";
        
        let promise = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            header: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        let response = await promise.json();
        
        return response;
    }



    postTextFetch({"title":"teste", "body":"oi", "userId": 1000})
        .then(response => console.log(response));
})();