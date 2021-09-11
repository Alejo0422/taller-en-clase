//plantillas literales//

//concatenación con el (back tick) se hace con la tecla Alt Gr + tecla antes de delete (`)

let nombre;
let mensaje;
let saludo;
let imprimir;
nombre = "Pepe Grillo";
mensaje = "que más pues";
saludo = "Oe";
//imprimir = nombre + mensaje + saludo;//
imprimir = `${nombre} ${mensaje} 
${saludo}`;
console.log (imprimir);