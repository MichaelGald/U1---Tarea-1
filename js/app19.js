let producto = parseFloat(prompt('Ingrese el valor del producto: '));
let impuesto = parseFloat(prompt('Ingrese la IVA del producto'));

let iva = (producto*impuesto)/100;
let compra = producto + iva;

alert(`El precio total del producto sera de Lps ${compra.toFixed(2)}`);