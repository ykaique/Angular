import { NgModule } from '@angular/core';
// No modulo de funcionalidade o CommomModule tem alguns pipes e diretivas para ser
// utilizados por esses componentes
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  // O que queremos expor para outros modulos
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
