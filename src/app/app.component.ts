import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-polygon-stocks';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Daily open/close',
        items: [
          {
            label: 'Bitcoin',
            icon: 'fab fa-bitcoin',
            routerLink: '/daily/bitcoin'
          },
          {
            label: 'Ethereum',
            icon: 'fab fa-ethereum',
            routerLink: '/daily/ethereum'
          },
          {
            label: 'Binance Coin',
            icon: 'fas fa-coins',
            routerLink: '/daily/binancecoin'
          }
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
