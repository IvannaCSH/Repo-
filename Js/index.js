const url = ".";

fetch(url).then( (response)=> {
    return response.json();
}).then( (data)=> {
    nombre = document.getElementById("nombre");
    nombre.innerHTML = data.name
    
    img = document.getElementById('imagen');
    img.src = data.sprites.front_default

    type = document.getElementById('porcentaje_mexico');
    type.innerHTML = data.types[0].type.name

    peso = document.getElementById('porcentaje_mundo');
    peso.innerHTML = data.weight;

}).catch(function (error) {
    alert("Sucedió un error")
});