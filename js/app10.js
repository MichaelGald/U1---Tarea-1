let radio = parseFloat(prompt('Ingrese el radio: '));
let area;
let pin= Math.PI;
let elevado2 = Math.pow(radio,2);
area= pin * elevado2;
alert(`El area del circulo es de ${area.toFixed(2)}`);