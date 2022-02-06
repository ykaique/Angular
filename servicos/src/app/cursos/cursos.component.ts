import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  cursos: string[];
  // Na injeção de dependencia a instacia ja é criada automaticamente
  constructor(private cursosService: CursosService) {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    // Fazendo inscricao no emissor de evento
    CursosService.criouNovoCurso.subscribe(
      curso => {
        console.log(curso);
      }
    );
  }

}
