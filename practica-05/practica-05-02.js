window.onload=comienzo;

function comienzo(){
    let VstResultado="";
    let cont=0;
    for (i=1;cont<100;i++){
        if (numerosprimos(i)){
            VstResultado+=i.toString()+ "|";
            cont++;
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
