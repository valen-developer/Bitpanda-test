import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commodity } from 'src/app/domain/commodity.model';
import { CommodityRepository } from 'src/app/services/repositories/commodity/commodity.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css'],
})
export class CommodityComponent implements OnInit {
  public commodity!: Commodity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commodityRepository: CommodityRepository
  ) {
    this.subscribeForParams();
  }

  ngOnInit(): void {}

  public setGradient() {
    return {
      'background-image': `linear-gradient(20deg, var(--background-color) 50%, ${this.commodity.color} 100%)`,
    };
  }
  public setLogoBoxShadow() {
    return {
      'box-shadow': `0 0 30px ${this.commodity.color}`,
    };
  }

  private subscribeForParams(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.setCoin(id);
    });
  }

  private async setCoin(id: number): Promise<void> {
    try {
      this.commodity = await this.commodityRepository.selectCoin(id);
    } catch (error) {
      this.router.navigate(['notfound']);
    }
  }
}
