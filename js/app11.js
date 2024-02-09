let numeros1 = parseInt(prompt('Ingrese el numero:'));
function primo(numeros1){
    if(numeros1 <= 1){
        alert('El numero no es primo.');
    }
    for(let i=2; i<= Math.sqrt(numeros1); i++){
       if(numeros1 % i ===0){
        alert('El numero no es primo.');
     }
   }
    alert('El numero es primo');
}
primo(numeros1);