//inferencia
// como a y b infiere que son number
const a = 1;
const b = 2;
const c = a + b;
//entonces c será number

//Functions
//Tipado de parámetros
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

// saludar("Fede")

// function presentarse({name,age}: {name:string, age:number}){
function presentarse(Persona: { name: string; age: number }): void {
  const { name, age } = Persona;
  console.log(`Hola soy ${name}, tengo ${age} años`);
}
presentarse({ name: "Pepe", age: 5 });

//tipado de Callbacks

const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Miguel");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiFromFunction(sayHi);

//tipado arrow functions
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

//Never
function throwError(message: string): never {
  throw new Error(message);
}
