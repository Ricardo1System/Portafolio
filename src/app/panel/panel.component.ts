import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() parametro: number | undefined;
  @Input() theme: string ='theme1';
  title:String | undefined;
  animacionActiva: boolean = false;

  constructor(private cdRef: ChangeDetectorRef){}

  ngOnInit(){
    this.ejecutarAnimacion();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['parametro'] && !changes['parametro'].firstChange) {
      this.setVarPanel();
      this.ejecutarAnimacion();
      this.cdRef.detectChanges();
    }
  }

  ejecutarAnimacion() {
    this.animacionActiva = true;
    setTimeout(() => {
      this.animacionActiva = false;
    }, 1000); // Duración de la animación en milisegundos
  }

setVarPanel(){
  switch (this.parametro) {
    case 1:
        this.title='Perfil';
      break;
    case 2:
      this.title='Proyectos';
      break;
    case 3:
      this.title='Tecnologias';
      break;
    case 4:
      this.title='Metas';
      break;
    case 5:
      this.title='Aficiones';
      break;
  
    default:
      break;
  }
}

}
