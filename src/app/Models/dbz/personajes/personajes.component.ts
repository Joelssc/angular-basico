import { Component, Input} from '@angular/core';
import { DbzService } from '../Service/dbz.service';
import { personaje } from '../interface/dbz.interface';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent{
  
  //@Input() personaje: any[]=[];
  get personaje(){
    return this.servicio.personaje;
  }

  constructor(private servicio:DbzService){
    //this.servicio.personaje;
  }
}
