export interface Registro {
  nombre: string;
  apellido: string;
  usuario: string;   // email o nombre de usuario
  password: string;  // Nota: en producción NO guardar texto plano
  telefono?: string; // como string para no perder ceros a la izquierda
}
