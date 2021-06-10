import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-prices',
  templateUrl: './daily-prices.component.html',
  styleUrls: ['./daily-prices.component.css']
})
export class DailyPricesComponent implements OnInit {

  coinNameToShow: string = "";


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the acutal coin from URL
    // subscribe allows us to get the actual URL param and not only the first one (https://medium.com/@mvivek3112/reloading-components-when-change-in-route-params-angular-deed6107c6bb)
    this.route.params.subscribe(routeParams => {
      const actualCoinFromRoute = this.route.snapshot.paramMap.get('coin');
      console.log(actualCoinFromRoute);
      if (actualCoinFromRoute == "bitcoin") {
        this.coinNameToShow = "Bitcoin | BTC";
      } else if (actualCoinFromRoute == "ethereum") {
        this.coinNameToShow = "Ethereum | ETH";
      } else if (actualCoinFromRoute == "binancecoin") {
        this.coinNameToShow = "Binance Coin | BNB";
      }
    });
  }


}
