import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAccountsTableComponent } from './home-accounts-table.component';

@NgModule({
  declarations: [HomeAccountsTableComponent],
  imports: [CommonModule],
  exports: [HomeAccountsTableComponent],
})
export class HomeAccountsTableModule {}
