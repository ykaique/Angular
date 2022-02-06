import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Colocar a tag se quiser que seja utilizado em apenas uma tag especifica
  // selector: 'p[appFundoAmarelo]'
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
    // Utilizar apenas em ultimo caso por questoes de seguranca
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
    // Forma segura de se fazer
      renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow');
  }

}
