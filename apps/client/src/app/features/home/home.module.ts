import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { RouterModule } from '@angular/router';
import { HomeStatsItemModule } from './components/home-stats-item/home-stats-item.module';
import { HomeUsersTableModule } from './components/home-users-table/home-users-table.module';
import { HomeAccountsTableModule } from './components/home-accounts-table/home-accounts-table.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    HomeStatsItemModule,
    HomeUsersTableModule,
    HomeAccountsTableModule,
  ],
})
export class HomeModule {}
