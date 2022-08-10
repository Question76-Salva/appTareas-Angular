import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  // ===================
  // === propiedades ===
  // ===================
  // - las propiedades de la clase
  // - son las que vamos a usar
  // - para visualizarlas dentro del HTML
  // - que esté asociado a esta clase
  listaTareas: Tarea[] = [];
  nombreTarea = '';

  // ===================
  // === constructor ===
  // ===================
  // - sólo para inicializar variables/propiedades de la clase
  // - pasar parámetros
  constructor() { }

  // ===============
  // === métodos ===
  // ===============
  ngOnInit(): void {
  }

  agregarTarea() {
    // - comprobar
    //console.log(this.nombreTarea);

    // - crear objeto 'tarea'
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // - agregar objeto al array 'listaTareas'
    this.listaTareas.push(tarea);

    // - resetear input
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    // - comprobar
    //console.log(index);

    // - elimina elemento por index del array 'listaTareas'
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    // - acceder al index
    // - cambiar estado | true-false | false-true
    this.listaTareas[index].estado = !tarea.estado;
  }

}
