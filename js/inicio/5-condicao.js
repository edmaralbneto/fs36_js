let idade = 15;
/*
se a idade for = 18 é de maior
idade menor que 18 é de menor
*/   

/*
=== - verifica o tipoe valor
*/ 

if (idade >= 18) {
    console.log("Você é de maior!");
}

else if (idade <= 3) {
    console.log('É bebê')
}

else if (idade <= 12 && idade > 3) {
    console.log('É criança')
}

else if (idade >= 13 && idade > 18){
    console.log('É adolescente')
}

else {
    console.log("Você é de menor!");
}

