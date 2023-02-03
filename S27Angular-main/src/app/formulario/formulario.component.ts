import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  Saludo(){
    return "Hola mundo";
  }

  Suma(n1: number, n2: number){
    return n1 + n2;
  }

  Evaluar(numero: number){
    if (numero >= 100){
      return true;
    }else{
      return false;
    }
  }

  IGV(subtotal: number){
    return subtotal * 0.18;
  }

user:string ="";
pass:string ="";
login=false;


Logearse(){
  if(this.user == 'jperez' && this.pass == '123456'){
    this.login = true;
  }else{
    this.login = false;
  }

}
num1 = 0; 
num2 = 0;

isChecked = true;
isChecked2 = true;
isChecked3 = true;
isChecked4 = true;

mostrar = false;
boton(){
  this.mostrar = true;
}

limpiar(){
  this.mostrar = false;
  this.num1 = 0;
  this.num2 = 0;
}


}
