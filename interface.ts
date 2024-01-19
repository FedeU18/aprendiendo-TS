//Parecido a Types

// interface Heroe {
//   id:string,
//   name:string,
//   age:number
//   saludar: ()=>void
// }

// const hero: Heroe = {
//   id:"1",
//   name: "Spiderman",
//   age: 30,
//   saludar: ()=>{
//     console.log("Hola")
//   }
// }

// extender intercfaces

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface Zapatilla extends Producto {
  talla: number;
}

//interface con operaciones en el carrito
//dos formas
//1
// interface CarritoOps {
//   add: (product:Producto)=>void
//   remove: (id:number)=>void
//   clear: ()=>void
// }
//2
interface CarritoOps {
  add(producto: Producto): void;
  remove(id: number): void;
  clear(): void;
}
//se pueden extender de esta forma
interface CarritoOps {
  pay(total: number): void;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: (Producto | Zapatilla)[];
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "producto 1",
      precio: 100,
      cantidad: 1,
      talla: 40,
    },
  ],
};
