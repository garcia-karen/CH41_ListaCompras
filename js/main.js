// El código va aquí ->
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }//if length
    return true;
}//Validad cantidad

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault(); 
        alertValidacionesTexto.innerHTML=""; //quita el alert cuando se inserta un texto en el campo
        alertValidaciones.style.display="none";
        txtNombre.style.border="";
        txtNumber.style.border="";

    if (txtNombre.value.length<3){
        alertValidacionesTexto.innerHTML="El <strong>Nombre</stong> no es correcto<br/>";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
    
    }//length<3 valida que el contenido sea mayor de 3 letras, sino lo pone en rojo
    
    if(! validarCantidad()){
        alertValidacionesTexto.innerHTML+="El <strong>Number</stong> no es correcto";
        alertValidaciones.style.display="block";
        txtNumber.style.border="solid red medium";
    }// valida que en el campo tenga un dato

});

btnClear.addEventListener("click", function (event) {
    event.preventDefault();    

    txtNombre.value = "";
    txtNumber.value = "";

});

