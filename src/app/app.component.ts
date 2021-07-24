import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LibroService} from './services/libros/libro.service';
import {ReservaService} from './services/reservas/reserva.service';
import {UsuarioService} from './services/usuarios/usuario.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClienteTitaMedia';

   formLibro!: FormGroup;

    constructor(
      
      public fb: FormBuilder,
      public libroService : LibroService,
      public resevaService : ReservaService,
      public usuarioService : UsuarioService
      ){}

  ngOnInit(): void {
    this.formLibro = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      categoria: ['', Validators.required],
      tarifa: ['', Validators.required],
      disp: [ '',Validators.required]
    })}

    
    


    saveBook(){

    }
  }

