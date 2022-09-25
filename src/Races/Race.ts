export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;
  protected static counter = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
