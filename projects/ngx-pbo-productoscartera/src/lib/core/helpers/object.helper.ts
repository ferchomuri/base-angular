/**
 * Verifica si un objeto está vacío.
 * @param obj El objeto a verificar.
 * @returns Verdadero si el objeto está vacío, falso en caso contrario.
 */
export function esObjetoVacio(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Hace una copia profunda de un objeto.
 * @param obj El objeto a copiar.
 * @returns Una copia profunda del objeto.
 */
export function copiarProfundo<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Compara dos objetos para ver si son iguales.
 * @param obj1 El primer objeto a comparar.
 * @param obj2 El segundo objeto a comparar.
 * @returns Verdadero si los objetos son iguales, falso en caso contrario.
 */
export function compararObjetos(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/**
 * Mezcla dos objetos, sobrescribiendo las propiedades del primer objeto con las del segundo.
 * @param obj1 El primer objeto.
 * @param obj2 El segundo objeto.
 * @returns Un nuevo objeto que es la mezcla de los dos objetos.
 */
export function mezclarObjetos<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
