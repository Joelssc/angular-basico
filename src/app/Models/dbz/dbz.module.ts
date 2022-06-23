import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonajesComponent } from './personajes/personajes.component';
import { MainPersonajesComponent } from './main-personajes/main-personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { DbzService } from './Service/dbz.service';

@NgModule({
  declarations: [
    PersonajesComponent,
    MainPersonajesComponent,
    AgregarPersonajeComponent
  ],
  exports:[
    MainPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
