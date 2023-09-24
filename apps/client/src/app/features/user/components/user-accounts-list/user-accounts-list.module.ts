import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountsListComponent } from './user-accounts-list.component';

@NgModule({
  declarations: [UserAccountsListComponent],
  imports: [CommonModule],
  exports: [UserAccountsListComponent],
})
export class UserAccountsListModule {}
