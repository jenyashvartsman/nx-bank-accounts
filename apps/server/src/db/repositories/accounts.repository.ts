import { Injectable } from '@nestjs/common';
import { AccountDto } from '@nx-bank-accounts/dtos';
import { FakeDbService } from '../data/fake-db.service';

@Injectable()
export class AccountsRepository {
  constructor(private readonly fakeDbService: FakeDbService) {}

  findAll(): AccountDto[] {
    return this.fakeDbService.getAccounts();
  }

  findAllByUserId(userId: string): AccountDto[] {
    return this.fakeDbService
      .getAccounts()
      .filter((account) => account.userId === userId);
  }
}
