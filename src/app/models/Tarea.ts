export class Tarea {

  // ===================
  // === propiedades ===
  // ===================
  // - las propiedades de la clase
  // - son las que vamos a usar
  // - para visualizarlas dentro del HTML
  // - que esté asociado a esta clase
  nombre: string;
  estado: boolean;


  // ===================
  // === constructor ===
  // ===================
  // - sólo para inicializar variables/propiedades de la clase
  // - pasar parámetros
  constructor(nombre: string, estado: boolean) {
    this.nombre = nombre;
    this.estado = estado;
  }

  // ===============
  // === métodos ===
  // ===============
}
