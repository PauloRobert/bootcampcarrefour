function verificaPalindromo (string){
    if (!string) return "String Invalida";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');