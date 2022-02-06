import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit,
  AfterContentChecked {


  @Input() valorInicial = 20;

  constructor() {
    console.log('construtor');
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }

  ngOnInit() {
    console.log('ngOnInit');

  }
  // ngDoCheck(){
  //   console.log('ngDoCheck');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}
