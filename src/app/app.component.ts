import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  log= [];
  show= false;
  onToggle(){
    this.show = !this.show;
    this.log.push(this.log.length +1);
  }
}
