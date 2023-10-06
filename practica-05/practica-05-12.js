window.onload = comienzo;
function comienzo() {
    const dirInput = document.formulario.dir.value;
    const mensajeInput = document.formulario.mensaje.value;
    dirInput.value = "";
    mensajeInput.value = "";
    document.formulario.Comprobar.onclick = comprobarDireccion;
}
function comprobarDireccion() {
    const formulario = document.forms.formulario;
    const dirInput = formulario.dir;
    const mensajeInput = formulario.mensaje;
    const dir = dirInput.value;
    if (validarDireccion(dir)) {
        mensajeInput.value = "La dirección es válida";
    } else {
        mensajeInput.value = "La dirección no es válida";
    }
}
function validarDireccion(dir) {
    let VstPrimero=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];
    let VstMedio=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü","º","ª","/","-"];
    for (const principio of VstPrimero){
    if (dir.startsWith(principio)){
        for (const Medio of VstMedio){
        for (let i=1;i<dir.length-2;i++){
        if (!(dir.charAt(i)).includes(Medio)){
            break;
        }
            for (const Ultimo of VstPrimero){
            if (dir.charAt(dir.length-1).includes(Ultimo)){
                if (dir.length>7&&dir.length<43){
                return true;
                }
            }}
        }}
    }}
    return false;
}