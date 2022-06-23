import { Injectable } from '@angular/core';
import { personaje } from '../interface/dbz.interface';

@Injectable()
export class DbzService {

  private _personaje: personaje[] = [
    {
      nombre: 'Goku',
      poder: 12334,
    },
    {
      nombre: 'Vegeta',
      poder: 10000,
    }
  ];

  constructor() {}
  agregarPersonaje(personaje: personaje){
    this._personaje.push(personaje);
  }

  get personaje(): personaje[] {
    return [...this._personaje];    //spread
  }
}
