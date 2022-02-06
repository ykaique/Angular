import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Paul McCartney - Biografia',
    rating: 4.6542,
    numPags: 785,
    preco: 65.54,
    dataLancamento: new Date(2015, 8, 7),
    url: 'paulmccartney.com'

  };

  filtro = '';
  livros = ['Codigo da Vinci', 'Sapiens', 'Diario de Anne Frank'];
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assyicrono..'), 2000);
  });

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor assincrono');

  constructor() { }

  ngOnInit() {
  }

  onAddLivro(valor) {
    this.livros.push(valor.value);
  }

  obterLivros() {
    if (this.livro.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter((v) => {
        if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
          return true;
        }
        return false;
      });
  }

}

