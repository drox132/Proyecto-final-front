const formulario= document.getElementById("form");

//Se dispara el evento al apretar el boton "Ingresar".
formulario.addEventListener('submit', (e)=>{

e.preventDefault()

const email= document.getElementById("EmailSesion").value;
const contraseña= document.getElementById("passwordSesion").value;

//Obtenemos los datos del localStorage.
const usuarios= JSON.parse(localStorage.getItem(email));

//Si el usuario ingresado existe y la contraseña es igual a la guardada en Local Storage se inicia su sesion.
if(localStorage.getItem(email)!=null && contraseña==usuarios[0].contraseñaUsuario){
   alert("Iniciando sesion del usuario "+`${email}`);
}

//Si no existe el usuario o la contraseña es incorrecta no podra iniciar
else{
     alert("Usuario o contraseña incorrecta");
}


});

