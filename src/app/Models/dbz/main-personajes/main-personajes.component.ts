import { Component } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../Service/dbz.service';

@Component({
  selector: 'app-main-personajes',
  templateUrl: './main-personajes.component.html',
})

export class MainPersonajesComponent {

  nuevoPersonaje : personaje = {
    nombre: 'Maestro roshi',
    poder: 10000,
  }

  constructor (){
  }
  // get personaje():personaje[]{
  //   return this.servicio.personaje;
  // }
  
}
