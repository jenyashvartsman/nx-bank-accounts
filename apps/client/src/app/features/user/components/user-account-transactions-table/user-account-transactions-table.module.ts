import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountTransactionsTableComponent } from './user-account-transactions-table.component';

@NgModule({
  declarations: [UserAccountTransactionsTableComponent],
  imports: [CommonModule],
  exports: [UserAccountTransactionsTableComponent],
})
export class UserAccountTransactionsTableModule {}
