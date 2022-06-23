import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeModule } from './Models/heroes/heroe.module';
import { ContadorModule } from './Models/contadors/contador.module';
import { DbzModule } from './Models/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroeModule,
    ContadorModule,
    DbzModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
