window.onload = comienzo;
function comienzo() {
    const fechaInput = document.formulario.fecha.value;
    const mensajeInput = document.formulario.mensaje.value;
    fechaInput.value = "";
    mensajeInput.value = "";
    document.formulario.Comprobar.onclick = comprobarFecha;
}
function comprobarFecha() {
    const formulario = document.forms.formulario;
    const fechaInput = formulario.fec;
    const mensajeInput = formulario.mensaje;
    const fecha = fechaInput.value;
    if (validarFecha(fecha)) {
        mensajeInput.value = "La fecha es válida";
    } else {
        mensajeInput.value = "La fecha no es válida";
    }
}
function validarFecha(fecha) {
    const separar=fecha.split("/-");
    const dia=parseInt(separar[0]);
    const mes=parseInt(separar[1]);
    const anio=parseInt(separar[2]);
    if (dia<0||dia>31){
        return false;
    }
    if (dia==31&&(mes==4||mes==6||mes==9||mes==11)){
        return false;
    }
    if (dia>29&&mes==2){
        return false;
    }
    if(dia==29&&mes==2&&anio%4!=0){
        return false;
    }
    if (mes<0||mes>12){
        return false;
    } 
    return true;
}