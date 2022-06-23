import { Component, Input} from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../Service/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {
  
  @Input() personaje: personaje[]=[];
  
  @Input() nuevoPersonaje: personaje = {
    nombre: '',
    poder: 0,  
  }
  
  constructor(private servicio:DbzService){}
    
  agregar(): void{
    if(this.nuevoPersonaje.nombre.trim().length == 0){ return;}
    // this.personaje.push(this.nuevoPersonaje);
    // console.log(this.nuevoPersonaje);

    this.servicio.agregarPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre:'',
      poder:0
    }
  }
}