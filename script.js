let idade = Number(prompt("Qual a sua idade?"));
    
if (idade >= 60) {
    console.log ("Entrada Franca");
} 

else if (idade >=0 && idade <= 12) {
    console.log ("Paga 10,OO reais a entrada");
}

else if (idade >=13 && idade <= 17) {
    console.log ("Paga 15,00 reais a entrada")
}

else if(idade >=18 && idade <=59) {
    let estudante = (prompt("Você é estudante ou aposetado(a)?"))
        if (estudante == "sim")
            console.log ("Paga 17,50 reais a entrada")
        else
            console.log ("Paga 35,00 reais a entrada");
}
