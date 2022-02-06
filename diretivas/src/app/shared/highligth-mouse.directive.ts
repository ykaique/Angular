import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighligthMouse]'
})
export class HighligthMouseDirective {

  backgroundColor: string;
  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    // codigo extra
    return this.backgroundColor;
  }


  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'white'
    // );
    this.backgroundColor = 'white';
  }


  constructor(
    // private elementRef: ElementRef, private renderer: Renderer
    ) {


  }

}
