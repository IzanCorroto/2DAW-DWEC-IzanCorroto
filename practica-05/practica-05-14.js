window.onload = comienzo;
function comienzo() {
    document.formulario.Comprobar.onclick = comprobarCódigo;
}
function comprobarCódigo() {
    const formulario = document.forms.formulario;
    const codInput = formulario.cod;
    const mensajeInput = formulario.mensaje;
    let cod = codInput.value;
    if (validarCódigo(cod)) {
        mensajeInput.value = "El código es correcto";
    } else {
        mensajeInput.value = "El código no es correcto";
    }
}
function validarCódigo(cod) {
    let VstDigitos=["0","1","2","3","4","5","6","7","8","9"];
    let VstPais=["AN","ES","DL","US"];
    let VstLetras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];
    let VstD=["#","@","$","&"];
    let VstFinal=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü","0","1","2","3","4","5","6","7","8","9","%","/","?","!"];
    
    let i=0;
    if (cod.length>19&&cod.length<27){
        for (numbers of VstDigitos){
            do {
                if (!cod.charAt(i).includes(numbers)&&i<3){
                    return false;
                }
                i++;        
            } while(cod.charAt(i).includes(numbers)&&i<6);
                for (pais of VstPais){
                if (cod.substr(i,2).includes(pais)){
                    for (const d of VstD){
                    if (cod.charAt(i+3).includes(d)){
                    for (letras of VstLetras){
                        let j=0;
                    do {
                        if (!cod.charAt(j).includes(letras)&&j<4){
                            return false;
                        }
                        j++;        
                    } while(cod.charAt(j).includes(numbers)&&j<7);
                    for ( digitos of VstDigitos){
                        for (let k=i+j+3;k<cod.length-9;k++){
                            if (!(cod.charAt(i)).includes(digitos)){
                                break;
                            }
                        }
                        for (letras of VstLetras){
                            for (let k=cod.length<9;k<cod.length-6;k++){
                                if (!(cod.charAt(k)).includes(letras)){
                                    break;
                                }
                            }
                            for (final of VstFinal){
                                for (let k=cod.length<6;k<cod.length-1;k++){
                                    if (!(cod.charAt(k)).includes(final)){
                                        break;
                                    }
                                    if (k==cod.length-1&&cod.charAt(k).includes(final)){
                                        return true;
                                    }
                                }
                        }}}
                }}}
                }
            }
        }
    }
    return false;
}