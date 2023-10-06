window.onload = comienzo;
function comienzo() {
    document.formulario.Comprobar.onclick = comprobarDireccion;
}
function comprobarDireccion() {
    const formulario = document.forms.formulario;
    const palInput = formulario.pal;
    const mensajeInput = formulario.mensaje;
    let pal = palInput.value;
    let str=pal.replace(/ /g, "");
    if (validarLocalidad(str)) {
        mensajeInput.value = "Esta frase es un palíndromo";
    } else {
        mensajeInput.value = "Esta frase no es un palíndromo";
    }
}
function validarLocalidad(str) {
    for (let i=0;i<str.length-1;i++){
        for (let j=str.length-1;j>0;j--){
            if (str.length-1-i==j&&str.charAt(i)!=str.charAt(j)){
                return false;
                break;
            }
        }
    }
    return true;
}