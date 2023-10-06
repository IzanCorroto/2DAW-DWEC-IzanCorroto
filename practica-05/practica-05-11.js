window.onload = comienzo;
function comienzo() {
    const locInput = document.formulario.loc.value;
    const mensajeInput = document.formulario.mensaje.value;
    locInput.value = "";
    mensajeInput.value = "";
    document.formulario.Comprobar.onclick = comprobarLocalidad;
}
function comprobarLocalidad() {
    const formulario = document.forms.formulario;
    const locInput = formulario.loc;
    const mensajeInput = formulario.mensaje;
    const loc = locInput.value;
    if (validarLocalidad(loc)) {
        mensajeInput.value = "La localidad es válida";
    } else {
        mensajeInput.value = "La localidad no es válida";
    }
}
function validarLocalidad(loc) {
    let VstPrimero=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];
    let VstMedio=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"," "];
    for (const principio of VstPrimero){
    if ((loc.substr(0,3)).includes(principio)){
        for (const Medio of VstMedio){
            for (let i=3;i<loc.length-4;i++){
                if (!(loc.charAt(i)).includes(Medio)){
                    break;
                }
            }
            for (const Ultimo of VstPrimero){
                for (let i=loc.length-3;i<dir.length-1;i++){
                    if (!(loc.charAt(i)).includes(Ultimo)){
                        break;
                    }
                }
                if (loc.length>7&&loc.length<36){
                return true;
                }
            }
        }}
    }
    return false;
}