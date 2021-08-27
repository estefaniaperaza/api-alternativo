var productsArray = [];
  function showProducts(array) {
    let listado = "";
        
            for (let i = 0; i < array.length; i++){

               let product = array[i];
               listado += `
               <hr>
               `+ product.nombreproducto + ` <br>
               `+ product.precio + `<br> 
               `+ product.descripcion + `<br>
               `+ product.ingredientes + `<br>
               <img src=" `+ product.img + `"> <br>

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


       
