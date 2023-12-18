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

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
// };

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// /**
//  * Devuelve un Hero
//  */
// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   const id = crypto.randomUUID();
//   return {id, name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 1500 });
// //Lo autocompleta

// console.log(crypto.randomUUID());

//template union types
// type HexadecimalColor =`#${string}`

// const color: HexadecimalColor = '0033ff'
// const color2: HexadecimalColor = "#0033ff"

//---------- UNION TYPES ----------

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type heroPowerScale = "low" | "medium" | "high";

// type Hero = {
//   readonly id?: HeroId;
//   name: string;
//   age: number;
//   isActive?: boolean;
//   powerScale?: heroPowerScale
// };

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// /**
//  * Devuelve un Hero
//  */
// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   const id = crypto.randomUUID();
//   return { id, name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 1500 });

// thor.powerScale= "high"

// ------ INTERSECTION TYPES -----

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type heroPowerScale = "low" | "medium" | "high";

type Hero = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: heroPowerScale;
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
  const id = crypto.randomUUID();
  return { id, name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 1500 });

thor.powerScale = "high";
