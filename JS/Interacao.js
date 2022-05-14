//BTN CRIPTOGRAFAR
let btcrip = document.querySelector("#btcriptografar");
//BTN DESCRIPTOGRAFAR
let btdescrip = document.querySelector("#btdescriptografar");

//CAIXA DE TEXTO
let ctextarea = document.querySelector("#Input");
let ctextareasaida = document.querySelector("#criptosaida");

//BTN COPIAR
let txtout = document.querySelector("#criptosaida");
let txtcopiar = document.getElementById("criptosaida");
let btcopiar = document.querySelector("#btcopiar");

document.querySelector("#Input").onkeypress = function(e){
    var regra = String.fromCharCode(e.which);
    if("qwertyuiopasdfghjklzxcvbnm ".indexOf(regra) < 0){
        alert('Apenas letras minúsculas sem acento e sem numeros. ;D');
        return false;
        
    }
    btcrip.addEventListener('click', criptografarbtn);
    btcrip.addEventListener('click', clearText);
    btdescrip.addEventListener('click', descripto);
    btdescrip.addEventListener('click', clearText);
    btcopiar.addEventListener('click', Copiar);
};



function criptografarbtn () {
//altera os caracteres assim que forem digitados e armazena o valor na variavel ctexarea. :)   
    ctextarea.value = ctextarea.value.replace('e', 'enter');  
    ctextarea.value = ctextarea.value.replace('i', 'imes');
    ctextarea.value = ctextarea.value.replace('a', 'ai');
    ctextarea.value = ctextarea.value.replace('o', 'ober');
    ctextarea.value = ctextarea.value.replace('u', 'ufat');
    ctextareasaida.value = ctextarea.value;   
    ctextareasaida.innerHTML = ctextareasaida.value;
}



function clearText(){ 
    ctextarea.value = "";
}
   
function Copiar () {
    txtcopiar.select();
    document.execCommand("copy");
    txtout.value = "";
    
};

function descripto () {
    ctextarea.value = ctextarea.value.replace('enter', 'e');  
    ctextarea.value = ctextarea.value.replace('imes', 'i');
    ctextarea.value = ctextarea.value.replace('ai', 'a');
    ctextarea.value = ctextarea.value.replace('ober', 'o');
    ctextarea.value = ctextarea.value.replace('ufat', 'u');
    ctextareasaida.value = ctextarea.value;   
    ctextareasaida.innerHTML = ctextareasaida.value;        

}

