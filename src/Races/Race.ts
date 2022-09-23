// Cada raça terá seu número máximo de instâncias, que será definido dentro de cada classe especializada;
// Na classe Race, o método deve lançar um erro com a mensagem Not implemented.
// Esse número corresponde à quantidade máxima de pontos de vida da raça;
// Cada raça terá seu número máximo de pontos, que será definido dentro de cada classe especializada;

export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  private static counter = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    Race.counter += 1;
    throw new Error('Not implemented');
    return Race.counter;
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}
