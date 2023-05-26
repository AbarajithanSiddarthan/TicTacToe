import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  count = [1,2,3,4,5,6,7,8,9];
  start = 0;
  player1 = [];
  player2 = [];

  calculate(event,index){
    if(event == 'X'){
      this.player1.push(index);
    }
    else{
      this.player2.push(index);
    }
    console.log("Player1 - ",this.player1,"Player2 - ",this.player2);
    this.start++
  }
}
