import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  borderStyle = '1px solid black';

  style = {
    color: 'red',
    fontWeight: 'bold',
    borderBottom: this.borderStyle
  }
}
