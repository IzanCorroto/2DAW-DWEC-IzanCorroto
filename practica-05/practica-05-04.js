window.onload = comienzo;
function comienzo() {
    document.formulario.Calcular.onclick = llamar;
}
function llamar(){
    octal();
    bin();
    hexa();
}
function bin() {
    var numdecimal=parseInt(document.getElementById("decimal").value);
    var numbinario=numdecimal.toString(2);
    document.getElementById("binario").value=numbinario;
}
function octal() {
    var numdecimal=parseInt(document.getElementById("decimal").value);
    var numoctal=numdecimal.toString(8);
    document.getElementById("octal").value=numoctal;
}
function hexa() {
    var numdecimal=parseInt(document.getElementById("decimal").value);
    var numhexa=numdecimal.toString(16);
    document.getElementById("hexa").value=numhexa;
}