window.onload = comienzo;
function comienzo() {
    const emailInput = document.formulario.mail.value;
    const mensajeInput = document.formulario.mensaje.value;
    emailInput.value = "";
    mensajeInput.value = "";
    document.formulario.Comprobar.onclick = comprobarEmail;
}
function comprobarEmail() {
    const formulario = document.forms.formulario;
    const emailInput = formulario.mail;
    const mensajeInput = formulario.mensaje;
    const email = emailInput.value;
    if (validarEmail(email)) {
        mensajeInput.value = "El email es válido";
    } else {
        mensajeInput.value = "El email no es válido";
    }
}
function validarEmail(email) {
    let VstPrimero=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];
    let VstMail=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü","-","."];
    let VstDir=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü","-"];
    const separar=email.split("@");
    const mail=separar[0];
    const dominio=separar[1];
    const separardominio=dominio.split(".");
    const dir=separardominio[0];
    const dns=separardominio[1];
    for (const Primero of VstPrimero){
    if (mail.startsWith(Primero)){
        for (const Mail of VstMail){
            for (let i=1;i<mail.length-2;i++){
                if (!(mail.charAt(i)).includes(Mail)){
                    break;
                }
            }
            for (const Ultimo of VstPrimero){
            if (mail.endsWith(Ultimo)){
                for (const Primero2 of VstPrimero){
                if (dir.startsWith(Primero2)){
                    for (const Dir of VstDir){
                        for (let i=1;i<dir.length-2;i++){
                            if (!(dir.charAt(i)).includes(Dir)){
                                break;
                            }
                        }
                        for (const Ultimo2 of VstPrimero){
                        if (dir.endsWith(Ultimo2)){
                            if (dns.length>=2&&dns.length<=4){
                                return true;
                            }
                        }}
                    }
                }}
            }
        }}
    }}
    return false;
}