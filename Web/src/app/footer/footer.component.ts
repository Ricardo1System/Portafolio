import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  animacionActiva: boolean = false;

  ngOnInit(){
    this.ejecutarAnimacion();
  }

  ejecutarAnimacion(): void {
    this.animacionActiva = true;
    setTimeout(() => {
      this.animacionActiva = false;
    }, 1000); // Duración de la animación en milisegundos
  }
}
