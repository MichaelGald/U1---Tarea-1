let dato = parseFloat(prompt('Igrese los metros:'));
let dato2 = parseFloat(prompt('Ingres los pies'));

let conver = dato2*12*0.0254;

let sumas = dato + conver;
let pulgadas = sumas/0.0254;
let pies = pulgadas/12;
let yarda = pies/3;
let millas = sumas/1609;

alert(`La conversiones en total son:\n Pulgadas: ${pulgadas.toFixed(2)}\n Yardas: ${yarda.toFixed(2)}
 Metros: ${sumas.toFixed(2)}\n Millas: ${millas.toFixed(2)}`)
