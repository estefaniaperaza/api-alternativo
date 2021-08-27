const PRODUCTS_URL = "https://estefaniaperaza.github.io/api-alternativo/productos.json";

var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}

document.addEventListener("DOMContentLoaded", function(e){
});

function recuperarDatos() {
  if (localStorage.getItem("mis_datos")) {
      mis_datos_json = localStorage.getItem("mis_datos");
      mis_datos = JSON.parse(mis_datos_json);
      document.getElementById("datos").innerHTML =
      "Usuario: " + mis_datos.inputEmail + "<br>";
  } else {
      document.getElementById("datos").innerHTML = "No hay datos almacenados";
  }
}
document.addEventListener("DOMContentLoaded", function (e) {
  recuperarDatos();
});
