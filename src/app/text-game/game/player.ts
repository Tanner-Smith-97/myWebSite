class Player {

  public playersVillage: Village = new Village();
  public playersStores: Stores = new Stores();

  // constructor() {
  //   let playersVillage = new Village();
  //   let playersStores = new Stores();
  // }

  gatherWood() {
    this.playersStores.addWood();
  }
}




