export default function validarCrearCuenta(valores) {
  let errores = {};

  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }else if(valores.nombre.length < 3){
    errores.nombre = "El nombre debe ser al menos de 3 caracteres";
  }

  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "El email no es valido";
  }

  if (!valores.password) {
    errores.password = "El password es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "El password debe ser de al menos 6 caracteres";
  }

  return errores;
}
