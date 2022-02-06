import { Injectable } from '@angular/core';


// Essa classe pode ser injetada em outra classe para que o uso dela possa ser feito
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext Js', 'Angular'];
  }
}
