let elegir = parseInt(prompt('Elegir que operacion quiere hacer:\n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division'));

function suma(){
    let suma1 = parseFloat(prompt('Ingrese el primer numero:'));
    let suma2 = parseFloat(prompt('Ingrese el segundo numero:'));
    let total1;
    total1 = suma1 + suma2;
    alert(`La suma de ${suma1} y ${suma2} es ${total1}`);

}

function resta(){
    let resta1 = parseFloat(prompt('Ingrese el primer numero:'));
    let resta2 = parseFloat(prompt('Ingrese el segundo numero:'));
    let total2;
    total2 = resta1 - resta2;
    alert(`La resta de ${resta1} y ${resta2} es ${total2}`);

}

function multiplicar(){
    let multiplicar1 = parseFloat(prompt('Ingrese el primer numero:'));
    let multiplicar2 = parseFloat(prompt('Ingrese el segundo numero:'));
    let total3;
    total3 = multiplicar1 * multiplicar2;
    alert(`La multiplicacion de ${multiplicar1} y ${multiplicar2} es ${total3}`);
}

function dividir(){
    let dividir1 = parseInt(prompt("Ingrese el primer numero."));
    let dividir2 = parseInt(prompt("Ingrese el segundo numero."));
    if(dividir2 !== 0){
    let total4 = dividir1 / dividir2;
    alert(`La division de ${dividir1} y ${dividir2} es ${total4.toFixed(2)}`);
    }
    else{
        alert('No se puede hacer esta operacio');
    }
}

switch (elegir) {
    case 1:
       suma();
        break;
    case 2: 
        resta();
        break;
    case 3:
        multiplicar();
        break;
    case 4:
        dividir();
        break;
    default:
        alert('ERROR. Vuelva a intentarlo.');
        break;
}