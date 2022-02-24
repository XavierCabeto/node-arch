import crypto from 'crypto';

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}