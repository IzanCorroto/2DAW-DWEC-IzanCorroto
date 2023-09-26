window.onload = comienzo;
function comienzo() {
    document.formulario.Comprobar.onclick = llamar;
}
function llamar(){
    let VstCadena=document.formulario.cad.value;
    let VstCadenaMinus;
    VstCadenaMinus=VstCadena.toLowerCase();
    a(VstCadenaMinus,VstCadena);
    e(VstCadenaMinus);
    i(VstCadenaMinus);
    o(VstCadenaMinus);
    u(VstCadenaMinus);
    vocales(VstCadenaMinus);
}
function a(VstCadenaMinus) {
    let VitNumA=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="a"){
            VitNumA++;
        }
    }
    document.formulario.a.value=VitNumA;
}
function e(VstCadenaMinus) {
    let VitNumE=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="e"){
            VitNumE++;
        }
    }
    document.formulario.e.value=VitNumE;
}
function i(VstCadenaMinus) {
    let VitNumI=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="i"){
            VitNumI++;
        }
    }
    document.formulario.i.value=VitNumI;
}
function o(VstCadenaMinus) {
    let VitNumO=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="o"){
            VitNumO++;
        }
    }
    document.formulario.o.value=VitNumO;
}
function u(VstCadenaMinus) {
    let VitNumU=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="u"){
            VitNumU++;
        }
    }
    document.formulario.u.value=VitNumU;
}
function vocales(VstCadenaMinus) {
    let VitNumVocales=0;
    for (let VitIndice=0;VitIndice<VstCadenaMinus.length;VitIndice++){
        if (VstCadenaMinus.charAt(VitIndice)=="a"||VstCadenaMinus.charAt(VitIndice)=="e"
        ||VstCadenaMinus.charAt(VitIndice)=="i"||VstCadenaMinus.charAt(VitIndice)=="o"
        ||VstCadenaMinus.charAt(VitIndice)=="u"){
            VitNumVocales++;
        }
    }
    document.formulario.vocales.value=VitNumVocales;
    consonantes(VstCadenaMinus,VitNumVocales);
}
function consonantes(VstCadenaMinus,VitNumVocales){
    let VitNumConsonantes;
    VitNumConsonantes=VstCadenaMinus.length-VitNumVocales;
    document.formulario.consonantes.value=VitNumConsonantes;
}
