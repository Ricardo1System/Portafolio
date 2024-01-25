import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentTheme: string = 'default';
  parametro: number | undefined;
  theme: string ='theme1';


  constructor(private cdRef: ChangeDetectorRef) {}
  
  recibirParametro(valor: number) {
    this.parametro = valor;
    this.cdRef.detectChanges();
  }
  recibirTheme(valor: string) {
    this.theme = valor;
    this.cdRef.detectChanges();
  }



}
