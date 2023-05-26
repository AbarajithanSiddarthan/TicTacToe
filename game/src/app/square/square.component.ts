import { Component, Input, OnInit, Output,EventEmitter,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() position:number;
  @Input() turn:number
  @Output() userClicked = new EventEmitter();
  player: string='';
  constructor() {
   }

  ngOnInit(): void {
  }

  playerClick(){
     this.player = this.turn % 2 == 0 ? 'X' : 'Y';
     this.userClicked.emit(this.player)
  }

}
