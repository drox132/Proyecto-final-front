const formulario= document.getElementById("form");

formulario.addEventListener('submit', (e) => {

e.preventDefault();

const nombre= document.getElementById("nombres").value;
const apellido= document.getElementById("Apellido/s").value;
const email= document.getElementById("inputEmail4").value;
const contraseña= document.getElementById("inputPassword4").value;


console.log(nombre+" "+apellido+" "+email+" "+contraseña)


});

