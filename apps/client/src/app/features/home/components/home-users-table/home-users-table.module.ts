import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsersTableComponent } from './home-users-table.component';

@NgModule({
  declarations: [HomeUsersTableComponent],
  imports: [CommonModule],
  exports: [HomeUsersTableComponent],
})
export class HomeUsersTableModule {}
