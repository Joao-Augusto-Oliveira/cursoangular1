import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import '@angular/common/locales/global/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import {FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe, FiltroArrayPipe, FiltroArrayImpuroPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
