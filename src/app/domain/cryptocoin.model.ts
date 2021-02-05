export class Cryptocoin {
  public readonly type: string;
  public readonly name: string;
  public readonly symbol: string;
  public readonly color: string;
  public readonly logoUrl: string;
  public readonly id: number;
  public readonly changeLast24h: number;

  constructor(coin: ICryptocoin) {
    this.type = 'cryptocoin';
    this.name = coin.name;
    this.symbol = coin.symbol;
    this.color = coin.color;
    this.logoUrl = coin.logoUrl;
    this.id = coin.id;
    this.changeLast24h = coin.changeLast24h;
  }
}

interface ICryptocoin {
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
  id: number;
  changeLast24h: number;
}
