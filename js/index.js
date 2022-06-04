

const productos = [
    {
        id: 1,
        img: "imgs/Auricular-HyperX.jpg",
        precio: 15000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 5
    },
    {
        id: 2,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 7
    },
    {
        id: 3,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 6
    },
    {
        id: 4,
        img: "imgs/Monitor FHD.jpg",
        precio: 35000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 2
    },
    {
        id: 5,
        img: "imgs/Moto G Power.jpg",
        precio: 50000,
        descripcion:"Celular Moto G Power 2022",
        stock: 10
    },
    {
        id: 6,
        img: "imgs/Auricular-HyperX.jpg",
        precio: 15000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 15
    },
    {
        id: 7,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 3
    },
    {
        id: 8,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 5
    },
    {
        id: 9,
        img: "imgs/Monitor FHD.jpg",
        precio: 35000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 9
    },
    // {
    //     id: 10,
    //     img: "imgs/Moto G Power.jpg",
    //     precio: 50000,
    //     descripcion:"Celular Moto G Power 2022",
    //     stock: 11
    // },
    {
        id: 11,
        img: "imgs/Auricular-HyperX.jpg",
        precio: 15000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 15
    },
    {
        id: 12,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 52
    },
    // {
    //     id: 13,
    //     img: "imgs/Teclado.jpg",
    //     precio: 25000,
    //     descripcion:"Teclado SteelSeries Apex 3",
    //     stock: 4
    // },
    {
        id: 14,
        img: "imgs/Monitor FHD.jpg",
        precio: 35000,
        descripcion:"Auricular HyperX Cloud II",
        stock: 16
    },
    {
        id: 15,
        img: "imgs/Moto G Power.jpg",
        precio: 50000,
        descripcion:"Celular Moto G Power 2022",
        stock: 8
    },
    // {
    //     id: 16,
    //     img: "imgs/Auricular-HyperX.jpg",
    //     precio: 15000,
    //     descripcion:"Auricular HyperX Cloud II",
    //     stock: 2
    // },
    {
        id: 17,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 4
    },
    {
        id: 18,
        img: "imgs/Teclado.jpg",
        precio: 25000,
        descripcion:"Teclado SteelSeries Apex 3",
        stock: 66
    },
    // {
    //     id: 19,
    //     img: "imgs/Monitor FHD.jpg",
    //     precio: 35000,
    //     descripcion:"Auricular HyperX Cloud II",
    //     stock: 3
    // },
    {
        id: 20,
        img: "imgs/Moto G Power.jpg",
        precio: 50000,
        descripcion:"Celular Moto G Power 2022",
        stock: 4
    },
]



let carrito=[]


let carritoVacio= ()=>{
    if(localStorage.getItem("Carrito")==null ) {
        return true;
    }
}


let Carrito= (producto) =>{
    if(carritoVacio()) {  //Si el carrito esta vacio, cargamos el carrito         
        console.log("carrito vacio")
        cargarCarrito(producto,carrito)
    }         
    else{
        carrito=JSON.parse(localStorage.getItem("Carrito")); //Si el carrito no esta vacio, cargamos datos de localstorage
        cargarCarrito(producto)        
    }
}

cargarCarrito=(producto)=>{


    carrito.push(producto);
    let productosCarrito= JSON.stringify(carrito)
    localStorage.setItem("Carrito",productosCarrito)    
        
 
}


carritoSinRepetidos=(producto)=>{

    let repetido=false     
    carrito.forEach(items =>{
        if(producto.id===items.id){
           console.log(producto.id +" igual a " + items.id)
           repetido=true;
        }
       
    })

    return repetido;
}


const generarCards= (productos)=>{
    let cards= document.querySelector(".cards");

    productos.forEach(producto => {
        let cardProducto=document.createElement("div");
        cardProducto.className="card p-3" ;
        

        let cardPlantilla =
         `
            <div class="contenedor-img d-flex align-content-center">
            <img src="${producto.img}" class="cardImg d-block m-auto " alt="..." >
            </div>
            <div class="cardBody">
                <h5> ${producto.precio}</h5>
                <p >${producto.descripcion}</p>
                <p> Disponible ${producto.stock}</p>
                <a id="cart${producto.id}" class="btn btn-primary">Agregar al carrito</a>
            </div>
        `

        cardProducto.innerHTML=cardPlantilla;

        cards.appendChild(cardProducto);

     let productCard = document.getElementById("cart" + producto.id);

     productCard.addEventListener("click", (evento)=>{
        evento.preventDefault();

        if(!carritoVacio()){
             carrito=JSON.parse(localStorage.getItem("Carrito")); //cargamos los datos en el carrito
        }
      
        if(!carritoSinRepetidos(producto)){
            Carrito(producto)
            console.log(carritoSinRepetidos(producto))
        }
       
             
    });

    

    });

    

}
        generarCards(productos);



        let productosLocalStorage=JSON.stringify(productos);

        localStorage.setItem("listProductStorage",productosLocalStorage);

        let productosGetLocalStorage= localStorage.getItem("listProductStorage",productosLocalStorage);

       





