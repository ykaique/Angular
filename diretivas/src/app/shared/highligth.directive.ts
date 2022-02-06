import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor = 'white';
  @Input() highligthColor = 'yellow';

  constructor() { }

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
    this.backgroundColor = this.highligthColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'white'
    // );
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
