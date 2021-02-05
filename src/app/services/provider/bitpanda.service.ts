import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { Commodity } from 'src/app/domain/commodity.model';
import { Cryptocoin } from 'src/app/domain/cryptocoin.model';

@Injectable({
  providedIn: 'root',
})
export class BitpandaService {
  private url = environment.bitpandaApiUrl;

  private data: any;

  constructor(private http: HttpClient) {}

  public async getCryptocoins(): Promise<Cryptocoin[]> {
    await this.getData();
    return this.buildCryptocoins();
  }

  public async getCommodities(): Promise<Commodity[]> {
    await this.getData();
    return this.buildCommodities();
  }

  private async getData(): Promise<void> {
    if (!this.data) {
      try {
        const resp: any = await this.http.get(this.url).toPromise();
        this.data = resp['data']['attributes'];
      } catch (error) {
        this.data = null;
      }
    }
  }

  private buildCryptocoins(): Cryptocoin[] {
    const cryptocoins: Cryptocoin[] = [];

    const jsonArray: any[] = this.data['cryptocoins'];

    jsonArray.forEach((c) => {
      cryptocoins.push(
        new Cryptocoin({
          id: c['id'],
          name: c['attributes']['name'],
          symbol: c['attributes']['symbol'],
          color: c['attributes']['color'],
          changeLast24h: c['attributes']['change_24h'],
          logoUrl: c['attributes']['logo'],
        })
      );
    });

    return cryptocoins;
  }

  private buildCommodities(): Cryptocoin[] {
    const commodities: Commodity[] = [];

    const jsonArray: any[] = this.data['commodities'];

    jsonArray.forEach((c) => {
      commodities.push(
        new Cryptocoin({
          id: c['id'],
          name: c['attributes']['name'],
          symbol: c['attributes']['symbol'],
          color: c['attributes']['color'],
          changeLast24h: c['attributes']['change_24h'],
          logoUrl: c['attributes']['logo'],
        })
      );
    });

    return commodities;
  }
}
