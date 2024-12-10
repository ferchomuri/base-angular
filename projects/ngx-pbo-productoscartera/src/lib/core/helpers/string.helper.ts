/**
 * Capitaliza la primera letra de una cadena.
 * @param str La cadena a capitalizar.
 * @returns La cadena con la primera letra en mayúscula.
 */
export function capitalizarPrimeraLetra(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Pone un límite a la longitud de una cadena y completa con '...'.
 * @param str La cadena a truncar.
 * @param length La longitud máxima permitida para la cadena.
 * @returns La cadena truncada con '...' si excede la longitud especificada.
 */
export function truncarCadena(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
