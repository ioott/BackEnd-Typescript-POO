import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  protected _name: string;
  protected _special: number = this._special;
  protected _cost: number = this._cost;;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    this._name = name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this.counter += 1;
    return this.counter;
  }
}
