        const pcs = [
    {
        id:1,
        img:"../../css/img/categorias/pc/pc-hp-w10.webp",
        precio: "$47.998",
        descripcion:"Pc Hp Slim S01-af102la 140q8aa Celeron J4025 4gb 1tb Win 10",
        stock:5,
        marca:"HP",
        sistemaOperativo:"Windows 10"
    },
    {
        id:2,
        img:"../../css/img/categorias/pc/pc-dell-w10.webp",
        precio: "$47.998",
        descripcion:"Pc Cpu Computadora I5 8gb Ram Ssd 120 Gb Dell Outlet Gtia",
        stock:7,
        marca:"Dell",
        sistemaOperativo:"Windows 7"
    },
    {
        id:3,
        img:"../../css/img/categorias/pc/pc-HP2-w10.webp",
        precio: "$62.999",
        descripcion:"All In One HP 21-b0002la Intel Celeron J4025 4gb 1tb Win 10",
        stock:3,
        marca:"Intel",
        sistemaOperativo:"Windows 10"
    },
    {
        id:4,
        img:"../../css/img/categorias/pc/pc-intel-w10.webp",
        precio: "$165.190",
        descripcion:"Pc Completa Intel I7 10700f Ram16gb Disco Ssd 960gb+wifi Q22",
        stock:10,
        marca:"Intel",
        sistemaOperativo:"Mac OS"
    },
    {
        id:5,
        img:"../../css/img/categorias/pc/pc-lenovo-w10.webp",
        precio: "$125.990",
        descripcion:"All In One Lenovo Aio Ryzen3 4gb Ram 256gbssd 24 W10 P",
        stock:3,
        marca:"Lenovo",
        sistemaOperativo:"Windows 10"
    },
    {
        id:6,
        img:"../../css/img/categorias/pc/pc2-dell-w10.webp",
        precio: "$165.999",
        descripcion:"Servidor Poweredge Dell T40 Xeon E3-2224 16gb 1tb Hd Gtia",
        stock:20,
        marca:"Dell",
        sistemaOperativo:"Linux"
    },
    {
        id:7,
        img:"../../css/img/categorias/pc/pc2-intel-w10.webp",
        precio: "$105.999",
        descripcion:"All In One Lenovo Aio Ryzen3 8gb Ram 256gbssd 24 W10 P",
        stock:5,
        marca:"Lenovo",
        sistemaOperativo:"Windows 10"
    },
    {
        id:8,
        img:"../../css/img/categorias/pc/pc2-intel-w10.webp",
        precio: "$105.999",
        descripcion:"All In One Intel Aio Ryzen3 8gb Ram 256gbssd 24 W10 P",
        stock:2,
        marca:"Intel",
        sistemaOperativo:"Windows 10"
    },
    {
        id:9,
        img:"../../css/img/categorias/pc/pc2-lenovo-w10.webp",
        precio: "$90.999",
        descripcion:"All In One Lenovo Aio Ryzen3 8gb Ram 256gbssd 24 W10 P",
        stock:4,
        marca:"Lenovo",
        sistemaOperativo:"Windows 10"
    },
    {
        id:10,
        img:"../../css/img/categorias/pc/pc3-HP-w10.webp",
        precio: "$155.999",
        descripcion:"All In One HP Aio Ryzen3 8gb Ram 256gbssd 24 W7 P",
        stock:7,
        marca:"HP",
        sistemaOperativo:"Windows 7"
    },
    {
        id:11,
        img:"../../css/img/categorias/pc/pc3-intel-w10.webp",
        precio: "$165.999",
        descripcion:"All In One intel Aio Ryzen3 8gb Ram 256gbssd 24 Linux P",
        stock:9,
        marca:"Intel",
        sistemaOperativo:"Linux"
    },
    {
        id:12,
        img:"../../css/img/categorias/pc/pc4-intel-w10.webp",
        precio: "$45.999",
        descripcion:"All In One Intel Aio Ryzen3 8gb Ram 256gbssd 24 W10 P",
        stock:2,
        marca:"Intel",
        sistemaOperativo:"Windows 10"
    },
]
        // console.log(pcs);

 const generarCategoryPc = (pcs) => {
    let divPadreCategoryPc = document.getElementById("category-pc");
        // console.log(divPadreCategoryPc);
    pcs.forEach(pc => {
        let divHijoCardPc = document.createElement("div");
        divHijoCardPc.className="card w-50 py-4";

        let cardpc=
        `   <div class="contenedor-img d-flex align-content-center">
            <img src="${pc.img}" class="cardImg" alt="SG-a22" >
            </div>
            <div class="cardBody">
                <h4> ${pc.sistemaOperativo}</h4>  
                <h4> ${pc.marca}</h4>  
                <h5> ${pc.precio}</h5>
                <p >${pc.descripcion}</p>
                <a href="#" class="btn btn-primary" id="cardpc${pc.id}">Agregar al carrito</a>
            </div>

        `;
        divHijoCardPc.innerHTML=cardpc;
        divPadreCategoryPc.appendChild(divHijoCardPc);
        
    });
 }

        generarCategoryPc(pcs);

        // EN ESTA SECCION GENERAMOS LAS CARDS DE LA CATEGORIA PC
//////////////////////////////////--------------///////////////////////////////////////////////////
//////////////////////////////////-------------//////////////////////////////////////////            

        // AHORA GENERAREMOS LOS FILTROS DE ESTA CATEGORIA POR MARCA Y SISTEMA OPERATIVO


const pcIntel=[];
const pcHp=[];
const pcLenovo=[];
const pcDell=[];
const pcW10= [];
const pcW7= [];
const pcLinux= [];
const pcMacOs= [];

pcs.forEach(pc=>{
    //condicionales para marcas

    if (pc.marca=="Intel") {
        pcIntel.push(pc);   
    }
    if(pc.marca=="HP"){
        pcHp.push(pc);
    }
    if (pc.marca=="Lenovo") {
        pcLenovo.push(pc);   
    }
    if(pc.marca=="Dell"){
        pcDell.push(pc);
    }
    //condicionales para sistemas operativos
    if (pc.sistemaOperativo=="Windows 10") {
        pcW10.push(pc);   
    }
    if(pc.sistemaOperativo=="Windows 7"){
        pcW7.push(pc);
    }
    if (pc.sistemaOperativo=="Linux") {
        pcLinux.push(pc);   
    }
    if(pc.sistemaOperativo=="Mac OS"){
        pcMacOs.push(pc);
    }
    
})       
let cPcIntel = document.getElementById("intel") ;
let cPcHp = document.getElementById("hp") ;;
let cPcLenovo = document.getElementById("lenovo") ;;
let cPcDell = document.getElementById("dell") ;;
let cPcW10 = document.getElementById("w10") ;;
let cPcW7 = document.getElementById("w7") ;;
let cPcLinux = document.getElementById("linux") ;;
let cPcMacOs = document.getElementById("mac") ;;


