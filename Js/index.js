const span = document.getElementById("energía")
const url = 'https://raw.githubusercontent.com/IvannaCSH/Repo-Fundamentos-de-programacion-web/main/Js/datos.json';
let energía ="Energía Hidraúlica";
fetch(url + energía)
.then(function(response){
return response.json();
})
.then(function(data){
let p = crearNodo ("p");
 let energía = crearNodo("span");
 let id = crearNodo("span");
 energía.innerHTML = data.energía;
 id.innerHTML = data.id + "-";
 adjuntar(p, id);
 adjuntar(p, energía);
 adjuntar(div, p);

})
.catch(function (error) {
 console.log(error);
});
function crearNodo(elemento){
    return document.createElement(elemento);
}
function adjuntar(padre,hijo) {
    return padre.appendChild(hijo);
}
