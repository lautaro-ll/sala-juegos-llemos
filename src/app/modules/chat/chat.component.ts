import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Usuario } from 'src/app/models/usuario';
import { Subscription } from 'rxjs';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input () usuario?: Usuario;
  message = '';
  messages: any[] = [];
  userSubscription?: Subscription;
  chatSubscription?: Subscription;
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(private chatService: ChatService, private usuariosService: UsuariosService, private interceptor: InterceptorService) {}

  ngOnInit() {
    this.interceptor.updateOverlayState(true);

    this.chatSubscription = this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
      setTimeout(()=>this.scrollToBottom(),0);
    });

    this.userSubscription = this.usuariosService.currentLoginState.subscribe((idloc)=>{
      this.usuariosService.getUsuario(idloc)
      .then((respuesta) => { this.usuario = respuesta; })
      .then(() => this.interceptor.updateOverlayState(false))
    });
  }
  
  sendMessage() {
    this.chatService.sendMessage(this.usuario!, this.message);
    this.message = '';
  }

  scrollToBottom(): void {
    console.log('scrollToBottom');
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
    this.chatSubscription?.unsubscribe();
  }
}
