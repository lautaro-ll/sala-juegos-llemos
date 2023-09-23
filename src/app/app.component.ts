import { Component } from '@angular/core';
import { InterceptorService } from './services/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sala-juegos-llemos';
  public showOverlay = false;

  constructor(private interceptor: InterceptorService) { 
     interceptor.currentOverlayState.subscribe(data => this.showOverlay = data);
  }
  
}
