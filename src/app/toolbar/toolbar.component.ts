import { AfterViewInit, Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements AfterViewInit {
  @Output() parametroEnviado = new EventEmitter<number>();
  @Output() themeEnviado = new EventEmitter<string>();

  theme: string ='theme1';
  animacionActiva: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(){
    this.ejecutarAnimacion();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const selectedTheme = localStorage.getItem('selectedTheme');
      if (selectedTheme) {
        this.theme = selectedTheme;
      }
      this.enviarTheme();
    }, 0);
  }

  reloadPage() {
    this.renderer.setProperty(window, 'location', window.location.href);
  }

  changeTheme(): void {
    if (this.theme === 'theme1') {
      this.theme = 'theme2';
    } else if (this.theme === 'theme2') {
      this.theme = 'theme3';
    } else {
      this.theme = 'theme1';
    }
    localStorage.setItem('selectedTheme', this.theme);
    this.reloadPage();
  }

  // enviarParametro(): void {
  //   const parametro = 0;
  //   this.parametroEnviado.emit(parametro);
  // }

  enviarTheme(): void {
    this.themeEnviado.emit(this.theme);
  }

  ejecutarAnimacion(): void {
    this.animacionActiva = true;
    setTimeout(() => {
      this.animacionActiva = false;
    }, 1000); // Duración de la animación en milisegundos
  }

  SetPanel(parametro: number): void {
    this.parametroEnviado.emit(parametro);
  }
}
