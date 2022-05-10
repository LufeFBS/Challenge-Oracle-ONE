let btcrip = document.querySelector("#btcriptografar");



function criptografarbtn () {
//Pega os dados do textarea digitado e coloca no botão.
    let ctextarea = document.querySelector("#Input");
    ctextarea.value = ctextarea.value.replace('e', 'enter');
    ctextarea.value = ctextarea.value.replace('i', 'imes');
    ctextarea.value = ctextarea.value.replace('a', 'ai');
    ctextarea.value = ctextarea.value.replace('o', 'ober');
    ctextarea.value = ctextarea.value.replace('u', 'ufat');
    btcrip = ctextarea.value;
    alert(btcrip);
}

btcrip.addEventListener('click', criptografarbtn);
console.log();

