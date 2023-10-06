window.onload = comienzo;
function comienzo() {
    const urlInput = document.formulario.url.value;
    const mensajeInput = document.formulario.mensaje.value;
    urlInput.value = "";
    mensajeInput.value = "";
    document.formulario.Comprobar.onclick = comprobarURL;
}
function comprobarURL() {
    const formulario = document.forms.formulario;
    const urlInput = formulario.url;
    const mensajeInput = formulario.mensaje;
    const url = urlInput.value;
    if (validarURL(url)) {
        mensajeInput.value = "La URL es válida";
    } else {
        mensajeInput.value = "La URL no es válida";
    }
}
function validarURL(url) {
    let VstHttp=["http://www","https://www","www"];
    let VstPrimero=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];
    let VstMedio=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü","-"];
    const separar=url.split(".");
    const http=separar[0];
    const dir=separar[1];
    const server=separar[2];
    for (const Primero of VstPrimero){
    if (dir.startsWith(Primero)){
        for (const Medio of VstMedio){
            for (let i=1;i<dir.length-2;i++){
                if (!(dir.charAt(i)).includes(Medio)){
                    break;
                }}
            for (const Final of VstPrimero){
            if (dir.endsWith(Final)){
                if (server.length>=2&&server.length<=4){
                    return true;
                }
            }}
        }
    }}
    return false;
}