import { CursosService } from './cursos/cursos.service';
// Prepara a aplicacao para ser executada no browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Formularios do angular
import { FormsModule } from '@angular/forms';
// Fazer requisicoes ajax http
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  // Componentes, Diretivas e Pipes que serao utilizados
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
  ],
  // Modulos que serao utilizados nos componentes
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule

    // HttpModule
  ],
  // Servicos que ficarao disponiveis
  providers: [CursosService],
  // Componente que deve ser instanciado quando iniciar a aplicacao
  bootstrap: [AppComponent]
})

export class AppModule { }
