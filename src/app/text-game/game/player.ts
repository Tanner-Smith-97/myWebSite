class Player {

  public playersVillage: Village = new Village();
  public playersStores: Stores = new Stores();

  gatherWood() {
    this.playersStores.addWood();
  }
}




