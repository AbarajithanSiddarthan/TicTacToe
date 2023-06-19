import { Component, Input, OnInit, Output,EventEmitter,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() selectedBoxes:any;
  @Input() currPosition:number;
  @Input() turn:number
  @Output() userClicked = new EventEmitter();
  player: string='';
  constructor() {
  }

  ngOnInit(): void {
  }

  playerClick() {
    let wrong = false
    if(this.selectedBoxes.includes(this.currPosition)){
      wrong = true;
    }
    else {
      this.player = this.turn % 2 == 0 ? 'X' : 'Y';
    }
    let status = {player:this.player,check:wrong}
    this.userClicked.emit(status)
  }

}
