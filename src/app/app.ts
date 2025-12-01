import { Component, signal, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Canciones } from './services/canciones/canciones';
import { Listas } from './services/listas/listas';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterOutlet,
      HttpClientModule
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  listaForm!: FormGroup;
  cancionesDisponibles: any;
  listasReproduccion: any;

  constructor(
    public fb: FormBuilder,
    public canciones: Canciones,
    public listas: Listas
    ) {}

  ngOnInit(): void {

    this.listaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      canciones: [[], Validators.required]
    });

    this.canciones.getAllCanciones().subscribe(
      resp => {
        this.cancionesDisponibles = resp;
      },
      error => {
        console.log(error);
      }
    );

   this.listas.gellAllListas().subscribe(
     resp => {
      this.listasReproduccion= resp;
      },
    error => {
      console.error(error)}
    );




}

  guardar(): void {
    this.listas.saveLista(this.listaForm.value).subscribe(resp => {
      this.listaForm.reset();
  },
  error => {console.error(error)}
  );
  }

   getTitulosCanciones(canciones: { titulo: string }[]): string {
      return canciones?.map(c => c.titulo).join(', ') || '';
    }



}
