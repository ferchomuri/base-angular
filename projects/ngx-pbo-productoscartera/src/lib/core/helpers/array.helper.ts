/**
 * Remueve los elementos duplicados de un arreglo.
 * @param array El arreglo del cual se desean remover los duplicados.
 * @returns Un nuevo arreglo sin elementos duplicados.
 */
export function removerDuplicados<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Aplana un arreglo bidimensional en un arreglo unidimensional.
 * @param array El arreglo bidimensional a aplanar.
 * @returns Un nuevo arreglo unidimensional.
 */
export function aplanarArreglo<T>(array: T[][]): T[] {
  return array.reduce((acc, val) => acc.concat(val), []);
}
