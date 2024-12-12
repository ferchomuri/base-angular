/**
 * Verifica si una dirección de correo electrónico es válida.
 * @param email La dirección de correo electrónico a verificar.
 * @returns Verdadero si la dirección de correo electrónico es válida, falso en caso contrario.
 */
export function esEmailValido(email: string): boolean {
  // Expresión regular mejorada para validar correos electrónicos
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
