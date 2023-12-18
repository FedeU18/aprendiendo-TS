// //Type Alias

// type Hero = {
//   name: string
//   age: number
// }

// let hero: Hero = {
//   name: "Thor",
//   age: 1500
// }

// /**
//  * Devuelve un Hero
//  */
// function createHero(hero: Hero) : Hero{
//   const {name,age} = hero
//   return {name,age}
// }

// const thor = createHero({name: 'Thor', age: 1500})

// ------- OPTIONALS PROPERTIES ---------

type Hero = {
  readonly id?: string;
  name: string;
  age: number;
  isActive?: boolean;
};

let hero: Hero = {
  name: "Thor",
  age: 1500,
};

/**
 * Devuelve un Hero
 */
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  // const id = crypto.randomUUID();
  return { name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 1500 });
//Lo autocompleta

console.log(crypto.randomUUID());
