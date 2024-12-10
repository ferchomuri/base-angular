/**
 * Verifica si una dirección de correo electrónico es válida.
 * @param email La dirección de correo electrónico a verificar.
 * @returns Verdadero si la dirección de correo electrónico es válida, falso en caso contrario.
 */
export function esEmailValido(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
