window.onload=comienzo;

function comienzo(){
    let VstResultado="";
    for (i=1;i<=100;i++){
        if (numerosprimos(i)){
            VstResultado+=i.toString()+ "|";
        }
    }
    document.formulario.textarea.value=VstResultado;
}



function numerosprimos(numeros){
    let VboPrimo=true;
    for (VitIndice=2;VitIndice<numeros;VitIndice++){
        if (numeros%VitIndice==0){
            VboPrimo=false;
        }
    }    
    return VboPrimo;
}
