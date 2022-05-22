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
                <a id="cart${producto.id}" class="btn btn-danger">Eliminar</a>
            </div>
        `

        cardProducto.innerHTML=cardPlantilla;

        cards.appendChild(cardProducto);

     

    });

    

}
        generarCards(productos);