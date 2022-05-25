let carrito = [];


if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
}

let productos= JSON.parse(localStorage.getItem("Carrito"));




const generarCards= (productos)=>{
    let cards= document.querySelector(".cards");
    productos.forEach(producto => {

        let cardProducto=document.createElement("div");
        cardProducto.className="card p-3" ;
        
       
             let cardPlantilla =
         `
            <div class="contenedor-img d-flex align-content-center">
            <img src="../${producto.img}" class="cardImg d-block m-auto " alt="..." >
            </div>
            <div class="cardBody">
                <h5> ${producto.precio}</h5>
                <p >${producto.descripcion}</p>
                <p> Disponible ${producto.stock}</p>
                <a id="cart2${producto.id}" class="btn btn-danger">Eliminar</a>
            </div>
        `

        cardProducto.innerHTML=cardPlantilla;

        cards.appendChild(cardProducto);

        cardProducto.querySelector('.btn-danger').addEventListener('click', removerDelCarrito)
        
        
        //funcion para remover del Carrito
        function removerDelCarrito(event){

        carrito.forEach((item,indice)=>matchId(item,indice)); 
        let carritoActualizado= localStorage.setItem("Carrito", JSON.stringify(carrito));
        actualizarCards();
        return  carritoActualizado;
        }

        //Se borra la card seleccionada a partir de su posicion en el arreglo
        function matchId(item,indice){
            if(item.id==producto.id){  //al recorrer "carrito" y encontrarse el id a eliminar , se lo borra de la posicion en el arreglo.
                carrito.splice(indice,1);
            }
        }
       
    
    });   
} 



//funcion para mostrar en pantalla las cards actualizadas al eliminar alguna
function actualizarCards(){
document.querySelector(".cards").innerHTML="";
obtengoCarrito = JSON.parse(localStorage.getItem("Carrito"));
generarCards(obtengoCarrito);
}


        generarCards(productos);
//funcion para el alert al comprar

    let compra="Compra Realizada con Exito, Disfruta tu Producto"       
function alerta () {
            alert( compra);
        }
       