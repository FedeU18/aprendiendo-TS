// -----ENUMS-----
enum DIAS {
  LUNES,
  MARTES,
  MIERCOLES,
  JUEVES,
  VIERNES,
  SABADO,
  DOMINGO,
}

function mostrarMensaje(dia: DIAS) {
  if (dia === DIAS.DOMINGO) {
    console.log("hoy es Domingo");
  }
  if (dia === DIAS.LUNES) {
    console.log("hoy es Lunes");
  }
  if (dia === DIAS.MARTES) {
    console.log("hoy es Martes");
  }
  if (dia === DIAS.MIERCOLES) {
    console.log("hoy es Miercoles");
  }
  if (dia === DIAS.JUEVES) {
    console.log("hoy es Jueves");
  }
}
console.log(mostrarMensaje(0));

// Utilizar const no genera código de más
const enum ERROR_TYPES {
  NOT_FOUND, //0
  UNAUTHORIZED, //1
  FORBIDDEN, //2
}

function mostrarMensajeDeError(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra...");
  }
  if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos...");
  }
  if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes pemitido...");
  }
}
