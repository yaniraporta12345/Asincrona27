import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Probando funcion Saludo', () => {
    expect(component.Saludo()).toEqual("Hola mundo");
  });

  it('Probando funcion Suma', () => {
    expect(component.Suma(10, 10)).toEqual(20);
  });

  it('Probando funcion Evaluar', () => {
    expect(component.Evaluar(12)).toEqual(false);
  });

  it('Titulo del formulario', () => {
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('h2')?.textContent).toContain('Formulario');
  });

  it('Probando funcion IGV', () => {
    expect(component.IGV(100)).toEqual(18);
  });
  

  it('Testing de testSuma TRUE',()=>{

    component.num1 = 10;
    component.num2 = 10;
    

    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();

    // Prueba
    expect(component.num1 + component.num2).toEqual(20);
  });

});
