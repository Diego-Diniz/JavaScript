// parâmentros de função


 function soma(numero1, numero2) {
     return numero1 + numero2;
 }

// console.log(soma(2,2));
// console.log(soma(234,23));
// console.log(soma(-42,232));

// parâmetros x argumentos 

// function nomeIdade(nome, idade) {
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// console.log(nomeIdade("Diego", 26 ));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5)))

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()