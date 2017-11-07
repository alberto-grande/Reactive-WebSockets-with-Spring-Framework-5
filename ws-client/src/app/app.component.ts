@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  files: Array<FileEvent> = [];

  private ws = new WebSocket('ws://localhost:8080/ws/files');

  constructor() {
    this.ws.onmessage = (me: MessageEvent) => {
      const data = JSON.parse(me.data) as FileEvent;
      this.files.push(data);
    };
  }

}

import { Component } from '@angular/core';

export interface FileEvent {
  path: string;
  sessionId: string;
}
