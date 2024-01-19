// function mostrarLongitud (objeto:number|string){
//   if(typeof objeto === 'string'){
//     return objeto.length
//   }

//   return objeto.toString().length
// }

// mostrarLongitud("123")

interface Mario {
  company: "nintendo";
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: "SEGA";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

//type guard
//comprobar si personaje es sonic
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
    return;
  }
  personaje.saltar();
  // if (personaje.company === "nintendo") {
  //   personaje.saltar();
  //   return;
  // }
  // personaje.correr();
}

//tipo de dato Never

function fn(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x += 2;
  } else {
    x; // never
  }
}
