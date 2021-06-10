import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// MenuBar
import {MenubarModule} from 'primeng/menubar';
import { DailyPricesComponent } from './daily-prices/daily-prices.component';

// card
import {CardModule} from 'primeng/card';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'daily/:coin', component: DailyPricesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DailyPricesComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    CardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
