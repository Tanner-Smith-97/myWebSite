import { Player } from './player';

export class Game{

  currentPlayer: Player = new Player;

  public handleEvent(type: string, item: string){
    if(type === 'gather'){
      this.currentPlayer.addResource(type, item);
    }
  }







}
