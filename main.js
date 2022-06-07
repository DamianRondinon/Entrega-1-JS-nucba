const ingredientes = [
  "Harina",
  "Levadura",
  "Sal",
  "Tomate",
  "Muzarella",
  "Oregano",
  "Aceitunas",
  "Agua",
  "Aceite",
  "Morron",
];

const par = [];

const impar = [];

function pizza(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i].length % 2 === 0) {
      par.push(array[i]);
    } else {
      impar.push(array[i]);
    }
  }
}

pizza(ingredientes);
console.log("\n Ingredientes Pares:");
console.log(par);
console.log("\n Array Impares:");
console.log(impar);
