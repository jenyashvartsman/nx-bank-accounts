import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './page/user.component';
import { RouterModule } from '@angular/router';
import { UserAccountTransactionsTableModule } from './components/user-account-transactions-table/user-account-transactions-table.module';
import { UserAccountsListModule } from './components/user-accounts-list/user-accounts-list.module';
import { UserDetailsModule } from './components/user-details/user-details.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserComponent }]),
    UserAccountTransactionsTableModule,
    UserAccountsListModule,
    UserDetailsModule,
  ],
})
export class UserModule {}
