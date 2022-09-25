import Race from './Race';

export default class Orc extends Race {
  protected _name: string;
  protected _dexterity: number;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this.counter += 1;
    return this.counter;
  }
}
