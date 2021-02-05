export class Commodity {
  public readonly type: string;
  public readonly name: string;
  public readonly symbol: string;
  public readonly color: string;
  public readonly logoUrl: string;
  public readonly id: number;
  public readonly changeLast24h: number;

  constructor(commodity: ICommodity) {
    this.type = 'commodity';
    this.name = commodity.name;
    this.symbol = commodity.symbol;
    this.color = commodity.color;
    this.logoUrl = commodity.logoUrl;
    this.id = commodity.id;
    this.changeLast24h = commodity.changeLast24h;
  }
}

interface ICommodity {
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
  id: number;
  changeLast24h: number;
}
