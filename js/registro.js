const formulario= document.getElementById("form");
const listaUsuarios= [];

const usuarioPassword= new Map();


//Se dispara el evento al apretar el boton "enviar"
formulario.addEventListener('submit', (e) => {

e.preventDefault();

const nombre= document.getElementById("nombres").value;
const apellido= document.getElementById("Apellido/s").value;
const email= document.getElementById("inputEmail4").value;
const contraseña= document.getElementById("inputPassword4").value;

//Guardamos los datos del usuario en un array.
const usuario=[nombre,apellido,email,contraseña]; 

//Corroboramos si existe o no el usuario. 
if (listaUsuarios.includes(usuario[2])){
            alert("Este usuario ya tiene una cuenta activa");
   }

//Si el usuario no existe, se guarda la informacion en LocalStorage y una alerta de registro exitoso.
else {

//Guarda en un array los nombres de usuario.
listaUsuarios.push((usuario[2])) 

//Guarda en un Map usuario como clave y contraseña como valor.
usuarioPassword.set(usuario[2],usuario[3])

for (let [key, value] of usuarioPassword) {
    console.log(key + ' goes ' + value);
  }



console.log("lista "+listaUsuarios)
        
//console.log(nombre+" "+apellido+" "+email+" "+contraseña)

//Guardamos los datos del usuario en localStorage
localStorage.setItem(`${email}`, JSON.stringify(usuario));

}


});





  


