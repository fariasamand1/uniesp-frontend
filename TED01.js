let pessoas = [];

for (let i = 0; i < 15; i++) {

  let altura = parseFloat(prompt(`Digite a altura da ${i+1}ª pessoa:`));
  
  
  let sexo = prompt(`Digite o sexo da ${i+1}ª pessoa (M ou F):`).toUpperCase();
  
  
  if (sexo !== "M" && sexo !== "F") {
    alert("Sexo inválido! Digite 'M' para masculino ou 'F' para feminino.");
    i--;
    continue;
  }
  

  pessoas.push({
    altura: altura,
    sexo: sexo
  });
}


let maiorAltura = -Infinity;
let menorAltura = Infinity;
let somaAlturaHomens = 0;
let qtdMulheres = 0;


for (let i = 0; i < pessoas.length; i++) {
  let pessoa = pessoas[i];
  
 
  if (pessoa.altura > maiorAltura) {
    maiorAltura = pessoa.altura;
  }
  if (pessoa.altura < menorAltura) {
    menorAltura = pessoa.altura;
  }
  
  if (pessoa.sexo === "M") {
    somaAlturaHomens += pessoa.altura;
  }
  

  if (pessoa.sexo === "F") {
    qtdMulheres++;
  }
}


let mediaAlturaHomens = somaAlturaHomens / (pessoas.length - qtdMulheres);


alert("Maior altura: " + maiorAltura);
alert("Menor altura: " + menorAltura);
alert("Média de altura dos homens: " + mediaAlturaHomens.toFixed(2));
alert("Número de mulheres: " + qtdMulheres);