var letras = ["e","i","a","o","u"];
var txtExtra = ["enter","imes","ai","ober","ufat"];
var mensaje1 = document.getElementById("txtPrincipal");
var imgtxt = document.getElementById("imagen-texto");
var mensaje2 = document.getElementById("mensaje2");
var btntxt2 = document.getElementById("btnCopiar");
btnEncriptar.addEventListener("click",encriptar)
btnDesencriptar.addEventListener("click",desencriptar)
btnCopiar.addEventListener("click",copiar)

function verificarTexto(textoPrincipal){
    var filtro = "abcdefghyjklmnñopqrstuvwxyz¿?¡! ";
    for(var i=0; i<textoPrincipal.length; i++){
        if (filtro.indexOf(textoPrincipal.charAt(i),0)!=-1){
           return true;
        }else{
            swal("Error", "No se admiten mayúsculas o caracteres especiales", "error");
            return false;
        }
     }
     
}
function encriptar(){
    var textoPrincipal = document.getElementById("txtPrincipal").value;
    if(textoPrincipal==""){
        swal("Advertencia", "No hay texto para encriptar. 🤨", "warning");
    }else if (verificarTexto(textoPrincipal)==true){
        for(var i=0;i<letras.length;i++){
            textoPrincipal=textoPrincipal.replaceAll(letras[i],txtExtra[i]);
        }
        imgtxt.style.display = "none";
        mensaje2.style.display="initial";
        mensaje2.style.marginTop="25px";
        btntxt2.style.display="initial";
        btntxt2.style.marginTop="15px";
        mensaje2.value=textoPrincipal;
        mensaje1.value="";
    }else{
        mensaje1.value="";
    }
    
    
}   

function desencriptar(){
    var textoPrincipal = document.getElementById("txtPrincipal").value;
    if(textoPrincipal==""){
        swal("Advertencia", "No hay texto para desencriptar. 🤨", "warning");
    }else{
        verificarTexto(textoPrincipal);
        for(var i=0;i<txtExtra.length;i++){
            textoPrincipal=textoPrincipal.replaceAll(txtExtra[i],letras[i]);
        }
        imgtxt.style.display = "none";
        mensaje2.style.display="initial";
        mensaje2.style.marginTop="25px";
        btntxt2.style.display="initial";
        btntxt2.style.marginTop="15px";
        mensaje2.value=textoPrincipal;
        mensaje1.value="";
    }
    
}

function copiar(){
    var texto = document.getElementById("mensaje2").value;
    mensaje1.value=texto;
    mensaje2.value="";
    imgtxt.style.display="initial";
    mensaje2.style.display ="none";
    btntxt2.style.display = "none";
}
