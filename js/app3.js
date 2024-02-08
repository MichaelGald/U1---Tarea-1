
alert('1.Multiplicacion \n 2.Division');
let cual = parseInt(prompt("Ingrese 1 o 2"));
switch (cual){
    case 1:
        let nu5 = parseInt(prompt("Ingrese el primer numero."));
        let nu6 = parseInt(prompt("Ingrese el segundo numero."));
        let result= nu5 * nu6;;
        alert('La multiplicacion es : ' + result);
        break;
    case 2:
        let nu7 = parseInt(prompt("Ingrese el primer numero."));
        let nu8 = parseInt(prompt("Ingrese el segundo numero."));
        if(nu8 !== 0){
        let resultad = nu7 / nu8;
        alert('La division es : ' + resultad);
        }
        else{
     alert('No se puede hacer esta operacio');
        }
        break;
     default: 
        alert('Los numeros son incorrectos.');
        break;
}

