import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cryptocoin } from 'src/app/domain/cryptocoin.model';
import { CryptocoinRepository } from 'src/app/services/repositories/cryptocoin/cryptocoin.service';

@Component({
  selector: 'app-cryptocoin',
  templateUrl: './cryptocoin.component.html',
  styleUrls: ['./cryptocoin.component.css'],
})
export class CryptocoinComponent implements OnInit {
  public cryptocoin!: Cryptocoin;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cryptocoinRepository: CryptocoinRepository
  ) {
    this.subscribeForParams();
  }

  ngOnInit(): void {}

  public setGradient() {
    return {
      'background-image': `linear-gradient(20deg, var(--background-color) 50%, ${this.cryptocoin.color} 100%)`,
    };
  }
  public setLogoBoxShadow() {
    return {
      'box-shadow': `0 0 30px ${this.cryptocoin.color}`,
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
      this.cryptocoin = await this.cryptocoinRepository.selectCoin(id);
    } catch (error) {
      this.router.navigate(['notfound']);
    }
  }
}
