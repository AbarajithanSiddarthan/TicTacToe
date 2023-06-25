import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  count = [1,2,3,4,5,6,7,8,9];
  succCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  start = 0;
  player1 = 0;
  player2 = 0;
  success:boolean = false;
  draw:boolean = false;
  player;
  xCheckIndexes = [];
  yCheckIndexes = [];
  xSuccess: any;
  ySuccess: any;
  warning:boolean = false;
  gameStart: boolean = true;
  playerTitle = 'X';
  constructor() {
    console.log(this.succCombinations);
    this.xSuccess = cloneDeep(this.succCombinations);
    this.ySuccess = cloneDeep(this.succCombinations);
  }

  calculate(event, index) {
    let player = event.player;
    let check = event.check;
    this.warning = check == true ? true : false;
    if(this.warning == true){
      return;
    }
    let res;
    let getAns = false;
    if (player == 'X') {
      this.xCheckIndexes.push(index);
      res = this.toCalculateResult(index, player, this.xSuccess, this.ySuccess);
      getAns = res;
    }
    else {
      this.yCheckIndexes.push(index);
      res = this.toCalculateResult(index,player,this.ySuccess,this.xSuccess);
      getAns = res;
    }
    this.start++;
    this.playerTitle = this.start % 2 == 0 ? 'X' : 'Y';
    if(this.start > 4 && getAns == true){
        if(player == 'X'){
          this.success = true;
          this.player = 'X';
        }
        else if(player == 'Y'){
          this.success = true;
          this.player = 'Y';
        }
        this.gameStart = false;
    }
    else if(this.start == 9){
          this.draw = true;
          this.gameStart = false;
    } 
  }

  toCalculateResult(x,event,checkList,opp){
    let inputArr = [];
    event == 'X' ? inputArr = this.xCheckIndexes : inputArr = this.yCheckIndexes
    if (opp.length > 1) {
      opp = opp.filter(data => {
        let index = data.findIndex(id => id == x);
        if(index == -1)
        {
          return true;
        }
        else{
          return false;
        }
      })
    }
    let result = false;
    if(checkList.length <= 4){
      for(const item of checkList){
        let succArr = item.filter(id => inputArr.includes(id));
        if(succArr.length == 3){
           result = true;
           break;
        }
      }
    }
    if(event == 'X'){
      this.ySuccess = opp;
      return result;
    }
    else{
      this.xSuccess = opp;
      return result;
    }
  }
}

