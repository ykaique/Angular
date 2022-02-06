import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule

  ],
  // Exportando para outros modulos poderem visualizar
  exports: [CriarCursoComponent],
  // Todo o projeto pode usar a injeção de CursosService
  // providers: [CursosService],
})
export class CriarCursoModule { }
