var a = 1;
var b = 2;

if (a ===1) {
    var a = 11; //O escopo é global
    let b = 22; //O escopo só funciona no bloco

    console.log(a); //11
    console.log(b); //22
}

console.log(a); //11
console.log(b); //2