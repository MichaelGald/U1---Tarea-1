let tamaño = parseFloat(prompt('Ingrese el tamaño del tanque en litros: '));
let convers =  tamaño/1000;

let piescubicos = convers/0.0283
let yardacubica = piescubicos/27;
alert(`El tamaño del tanque a metros cubicos es de ${convers.toFixed(2)} y en yarda cubicas es de ${yardacubica.toFixed(2)}`);
alert(`La cantidad en metros cubicos es: ${(convers*0.75).toFixed(2)} para domestico y ${(convers*0.25).toFixed(2)} en riego
 La cantidad en pies cubicos es: ${(piescubicos*0.75).toFixed(2)} para domestico y ${(piescubicos*0.25).toFixed(2)} en riego`);