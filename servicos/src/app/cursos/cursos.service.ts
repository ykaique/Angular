import { LogService } from './../shared/log.service';
import {  } from './cursos.service';
import { Injectable, EventEmitter } from '@angular/core';

// Classe injetavel
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  cursos = ['Angular', 'Java', 'C#'];

  constructor(private logService: LogService) {
    console.log('CursosService');

  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de Cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    // emitindo evento de que um curso foi criado
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
