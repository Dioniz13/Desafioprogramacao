alert("Boas vindas ao nosso site!");
let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
alert("Olá " + nome + ", você tem " + idade + " anos.");
console.log("Nome do usuário: " + nome);
console.log("Idade do usuário: " + idade);

if (idade < 18) {
    alert("Você é menor de idade.");
} else {
    alert("Você pode tirar sua habilitação.");
}