import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  // Exportando para outros modulos poderem visualizar
  exports: [CursosComponent],
  // Todo o projeto pode usar a injeção de CursosService
  // providers: [CursosService],
})
export class CursosModule { }
