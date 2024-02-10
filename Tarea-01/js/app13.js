let dolar= parseFloat(prompt('Ingrese los dolares:'));
let lempira  = 24.71;
let comversion;

comversion = dolar*lempira;

alert(`El cambio de USD ${dolar} a HNL es ${comversion.toFixed(2)}`);