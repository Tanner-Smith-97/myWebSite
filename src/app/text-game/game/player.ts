import {Stores} from "./stores";
import {Village} from './village';

export class Player {

  public playersVillage: Village = new Village();
  public playersStores: Stores = new Stores();

  gatherWood() {
    this.playersStores.addWood();
  }

  public addResource(type: string, item: string, amount?: number){
    if(type === 'stores'){
      this.playersStores.addItem(item);
    }

  }
}




