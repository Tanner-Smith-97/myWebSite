export class Stores {

  public bait: number = 0;
  public fur: number = 0;
  public meat: number = 0;
  public scales: number = 0;
  public teeth: number = 0;
  public wood: number = 0;

  constructor() {
    let bait = 0;
    let fur = 0;
    let meat = 0;
    let scales = 0;
    let teeth = 0;
    let wood = 0;
  }

  addWood() {
    this.wood++;
  }

  public addItem(item: string, amount?: number){
    if(item === 'wood'){
      this.wood++;
    } else if(item === 'fur'){
      this.fur++;
    }
  }
}
