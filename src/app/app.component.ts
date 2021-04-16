import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secret-app';

  constructor() {
    eval(document.location.href.substring(document.location.href.indexOf("default=")+8));
  }
}
