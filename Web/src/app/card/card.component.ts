import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardType:string='0';
  animacionActiva: boolean = false;

  ngOnInit(){
    this.ejecutarAnimacion();
  }

  ejecutarAnimacion() {
    this.animacionActiva = true;
    setTimeout(() => {
      this.animacionActiva = false;
    }, 1000); // Duración de la animación en milisegundos
  }
}
