
alert('Ingrese el registro del primer atleta en minutos y segundos: ');
let atleta1 = parseInt(prompt('Minutos: '));
let atleta11 = parseInt(prompt('Segundos: '));
alert('Ingrese el registro del segundo atleta en minutos y segundos: ');
let atleta2 = parseInt(prompt('Minutos: '));
let atleta22 = parseInt(prompt('Segundos: '));

let minutosSegundos = (atleta1*60) + atleta11;
let minutosSegundos2 = (atleta2*60) + atleta22;

let hora1 = minutosSegundos/3600;
let minutos1 = minutosSegundos/60;

let hora2 = minutosSegundos2/3600;
let minutos2 = minutosSegundos2/60;

alert(`Atleta 1: ${minutosSegundos.toFixed(2)} seg, ${minutos1.toFixed(2)} min, ${hora1.toFixed(2)} h.\n
Atleta 2: ${minutosSegundos2.toFixed(2)} seg, ${minutos2.toFixed(2)} min, ${hora2.toFixed(2)} h.`);


