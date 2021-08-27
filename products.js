var productsArray = [];
  function showProducts(array) {
    let listado = "";
        
            for (let i = 0; i < array.length; i++){

               let product = array[i];
               listado += `
               <div class="cajas">
               <h3 class="nombre">`+ product.nombreproducto + `</h3> 
               <p id="precio">`+ product.precio + `</p> 
               <small>`+ product.descripcion + `</small>
               <p id="ingr">Ingredientes: `+ product.ingredientes + ` </p> 
               <img id="imgPro" src=" `+ product.imgSrc + `"> 
               </div>
               
            `
            }
               document.getElementById("mostrar").innerHTML = listado;
     }
     document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok") {
                productsArray = resultObj.data;
    
                showProducts(productsArray);
            }
        });
    });


       
