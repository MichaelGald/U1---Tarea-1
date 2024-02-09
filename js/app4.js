let alto = parseFloat(prompt('Ingrese la altura del triangulo: '));
let base= parseFloat(prompt('Ingrese la base del triangulo: '));
let area;
if( base > 0 && alto > 0){
area = (base * alto)/2;
alert('El area total del triangulo es de '+ area.toFixed(2))
}
else{
alert('No se puede hacer el area del triangulo debe ser mayor a 0.')
}
