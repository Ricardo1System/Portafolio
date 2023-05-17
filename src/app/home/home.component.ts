import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() conten: string | undefined;
  animate = false;

  constructor() {}

  startAnimation() {
    this.animate = true;
  }

  clickOption(key: number) {
    switch (key) {
      case 1:
        this.conten =
          'Aqui tengo mis conocimientos en las tecnologias que he usado a lo lago de mi desarrollo profecional, adjunto asi mismo proyectos propios creados con estas tecnologías';
        this.startAnimation();
        break;
      case 2:
        this.conten =
          'Aca hago mención de los proyectos en los que estado involucrado en su desarrollo';
        this.startAnimation();
        break;
      case 3:
        this.conten = 'Aqui explico un poco mas de mi, mis metas y propositos';
        this.startAnimation();
        break;

      default:
        break;
    }
  }
}
