/**
 * Formatea una fecha en el formato especificado.
 * @param fecha La fecha a formatear.
 * @param formato El formato en el que se desea la fecha (por ejemplo, 'MM/DD/YYYY').
 * @returns La fecha formateada como una cadena.
 */
export function formatearFecha(fecha: Date, formato: string): string {
  const day = fecha.getDate().toString().padStart(2, '0');
  const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son 0-indexados
  const year = fecha.getFullYear().toString();

  if (formato === 'MM/DD/YYYY') {
    return `${month}/${day}/${year}`;
  }

  // Puedes agregar más formatos si es necesario
  throw new Error(`Formato no soportado: ${formato}`);
}

/**
 * Agrega un número específico de días a una fecha.
 * @param date La fecha a la que se le agregarán los días.
 * @param days El número de días a agregar.
 * @returns Una nueva fecha con los días agregados.
 */
export function agregarDias(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
