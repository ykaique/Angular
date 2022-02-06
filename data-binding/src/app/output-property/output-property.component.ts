import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput', null) campoValorInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }


  incrementa() {
    console.log(this.campoValorInput.nativeElement.value);
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    // Estamos emitindo uma variavel que nao esta sendo alterada
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    console.log(this.campoValorInput);
    this.campoValorInput.nativeElement.value--;
    // this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });

  }
}
