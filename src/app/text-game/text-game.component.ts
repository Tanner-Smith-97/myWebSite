import { Component, OnInit } from '@angular/core';

import { Game } from './game/game';

import { Stores } from './game/stores';

// interface Item {
//   title: string
// }

@Component({
  selector: 'app-text-game',
  templateUrl: './text-game.component.html',
  styleUrls: ['./text-game.component.css']
})
export class TextGameComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  //playerStores: Stores = new Stores();
  game: Game = new Game;

  public getStuff(e : any): void {
    //this.playerStores.wood += 10;
    console.log(e.currentTarget.getAttribute('value'));

    this.game.handleEvent(e.currentTarget.getAttribute('id'), e.currentTarget.getAttribute('value'));
}


}
