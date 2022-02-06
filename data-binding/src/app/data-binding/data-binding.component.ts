import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://teste.com';
  cursoAngular = true;

  urlImg = 'http://lorempixel.com/600/400/';

  valorAtual: string;
  valorSalvo: string;

  isMouseOver = false;

  nome = 'abc';

  pessoa = {
    nome: 'Ygor',
    idade: 20
  };

  nomeCurso = 'Angular';
  valorInicial = 5;

  constructor() { }

  ngOnInit() {
  }


  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao clicado');
  }

  onKeyUp(evento) {
    this.valorAtual = evento.target.value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event) {
    console.log(event.novoValor);

  }
}
