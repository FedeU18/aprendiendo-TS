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

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// type heroPowerScale = "low" | "medium" | "high";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

// type HeroProperties = {
//   readonly id?: HeroId;
//   isActive?: boolean;
//   powerScale?: heroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//   name: "Thor",
//   age: 1500,
// };

// /**
//  * Devuelve un Hero
//  */
// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input;
//   const id = crypto.randomUUID();
//   return { id, name, age, isActive: true };
// }

// const thor = createHero({ name: "Thor", age: 1500 });

// thor.powerScale = "high";

// ------ TYPE INDEXING -----

// type HeroProperties  = {
//   isActive: boolean,
//   address: {
//     planet: string,
//     city:string
//   }
// }

// const addressHero: HeroProperties['address'] ={
//   planet: "Earth",
//   city:"Neuquén"
// }

// ----- TYPE FROM VALUE -----

// const address = {
//   planet: "Earth",
//   city: "Nqn",
// };
// type Address = typeof address;

// const personalAddress: Address = {
//   planet: "Earth",
//   city: "Gotham",
// };

//----- TYPE FROM FUNCTION RETURN -----

// function createAddress() {
//   return {
//     planet: "Tierra",
//     city: "Nqn",
//   };
// }

// type Address = ReturnType<typeof createAddress>;

// ----- ARRAYS -----
//Formas de tipar los arrays
// const languages: Array<string> = []
// const languages: string[] = [];
// const languages: (string | number)[] = [];

// languages.push("JavaScript");
// languages.push("JavaScript");
// languages.push("JavaScript");
// languages.push("JavaScript");
// languages.push(2);

// un Arreglo de objetos
// type HeroBasicInfo = {
//   id?: number
//   name: string
//   age:number
// }

// const heros : HeroBasicInfo[] = []

// [
//   ["X","O","X"],
//   ["O","X","O"],
//   ["X","","O"]
// ]

type CellValue = "X" | "O" | "";

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: CellValue[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

type RGB = [number, number, number];

const rgb: RGB = [2, 4, 255];
