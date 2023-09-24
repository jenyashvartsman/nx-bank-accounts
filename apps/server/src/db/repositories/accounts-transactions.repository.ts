import { Injectable } from '@nestjs/common';
import { AccountTransactionDto } from '@nx-bank-accounts/dtos';
import { FakeDbService } from '../data/fake-db.service';

@Injectable()
export class AccountsTransactionsRepository {
  constructor(private readonly fakeDbService: FakeDbService) {}

  findAllByAccountNumber(accountNumber: string): AccountTransactionDto[] {
    return this.fakeDbService
      .getAccountsTransactions()
      .filter((transaction) => transaction.accountNumber === accountNumber);
  }
}
