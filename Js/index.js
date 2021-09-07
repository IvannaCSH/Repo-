const url = "https://raw.githubusercontent.com/IvannaCSH/Repo-Fundamentos-de-programacion-web/main/Js/datos.json";

fetch(url).then( (response)=> {
    return response.json();
}).then( (data)=> {
    energía = document.getElementById("energía");
    energía.innerHTML = data.energía

    porcentaje_mexico = document.getElementById('porcentaje_mexico');
    porcentaje_mexico.innerHTML = data.porcentaje_mexico

    porcentaje_mundo = document.getElementById('porcentaje_mundo');
    porcentaje_mundo.innerHTML = data.porcentaje_mundo;

}).catch(function (error) {
    alert("Sucedió un error")
});