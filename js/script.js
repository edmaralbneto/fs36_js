/*
Testar 5 idadesao mesmo tempo
2, 12, 15, 18,30
*/ 


function  VerificarIdade (idade){
    let idade1 = parseInt(prompt("Digite a primeira idade:"));
}
if (idade <= 3 ) {
    console.log("È Bebê");
}
else if (idade > 3 && idade <= 12) {
    console.log('É criança')
}
else if (idade >=13 && idade < 18) {
    console.log('É adoscelescente')
}
else if (idade > 18 ){
    console.log('É adulto')
}
else {
    console.log("Você é de menor!");
}

VerificarIdade (2);
VerificarIdade (12);
VerificarIdade (15);
VerificarIdade (18);
VerificarIdade (30);