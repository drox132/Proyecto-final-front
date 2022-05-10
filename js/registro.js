const formulario= document.getElementById("form");
const listaUsuarios= new Array();


//Se dispara el evento al apretar el boton "enviar"
formulario.addEventListener('submit', (e) => {

e.preventDefault();

const nombre= document.getElementById("nombres").value;
const apellido= document.getElementById("Apellido/s").value;
const email= document.getElementById("inputEmail4").value;
const contraseña= document.getElementById("inputPassword4").value;


const usuario = [
    { emailUsuario: email, contraseñaUsuario: contraseña }
];


//Corroboramos si existe o no el usuario. 
if (listaUsuarios.includes(usuario[0].emailUsuario)){
            alert("Este usuario ya tiene una cuenta activa");
   }

//Si el usuario no existe, se guarda la informacion en LocalStorage y una alerta de registro exitoso.
else {

//Guarda en un array los nombres de usuario.
listaUsuarios.push((usuario[0].emailUsuario))


console.log("lista "+listaUsuarios)
        

//Guardamos los datos del usuario en localStorage
localStorage.setItem(`${email}`, JSON.stringify(usuario));

}


});





  


