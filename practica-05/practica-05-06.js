window.onload = comienzo;
function comienzo() {
    document.formulario.Comprobar.onclick = llamar;
}
function llamar(){
    let VstCadena=document.formulario.cad.value;
    let VstBuscar=document.formulario.numvocales.value;
    let VstCadenaMinus;
    VstCadenaMinus=VstCadena.toLowerCase();
    VstBuscarMinus=VstBuscar.toLowerCase();
    comprobar(VstCadenaMinus,VstBuscarMinus);
}
function comprobar(VstCadenaMinus,VstBuscarMinus) {
        if (VstCadenaMinus.includes(VitIndice)){
            document.formulario.mensaje.value = "La cadena está incluida en el texto";
        }else{
            document.formulario.mensaje.value = "La cadena no está incluida en el texto";
        }
    document.formulario.a.value=VitNumA;
}
