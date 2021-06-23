import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario-notas',
  templateUrl: './formulario-notas.component.html',
  styleUrls: ['./formulario-notas.component.css']
})
export class FormularioNotasComponent {

  public salida!: string;
  public notaPresentacion!: number;
  public notaFinal!: number;

  public formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl(''),
      examen: new FormControl(''),
    }),
  });

  public enviar() {
    let nota1 = parseInt(this.formulario.value.notas.nota1);
    let nota2 = parseInt(this.formulario.value.notas.nota2);
    let nota3 = parseInt(this.formulario.value.notas.nota3);
    let nota4 = parseInt(this.formulario.value.notas.nota4);
    let examen = parseInt(this.formulario.value.notas.examen);
    this.notaPresentacion = ((nota1+nota2+nota3+nota4)/4);
    this.notaFinal = this.notaPresentacion*0.7 + examen*0.3;

    if (nota1 >= 4 && nota2 >= 4 && nota3 >= 4 && nota4>=4 && examen>=4) {
      this.salida = "El alumno aprueba el curso";
    } else {
      this.salida = "El alumno reprueba el curso";
    }
  }
}
