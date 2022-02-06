
import { Component, OnInit } from '@angular/core';

// Decorator para dizer que essa classe é um componente
@Component(
  // Metadados
  {
    // Nome da tag para usar no html posteriormente
    selector: 'app-meu-primeiro',
    // template que sera utilizada
    templateUrl: './meu-primeiro.component.html',
    styleUrls: ['./meu-primeiro.component.css']
  }
)
// Exportar para todo projeto conseguir visualizar esse componente
export class MeuPrimeiroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
