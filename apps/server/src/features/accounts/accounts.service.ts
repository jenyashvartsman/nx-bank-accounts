import { Injectable } from '@nestjs/common';
import { AccountsRepository } from '../../db/repositories/accounts.repository';
import { AccountDto, AccountTransactionDto } from '@nx-bank-accounts/dtos';
import { AccountsTransactionsRepository } from '../../db/repositories/accounts-transactions.repository';

@Injectable()
export class AccountsService {
  constructor(
    private readonly accountsRepository: AccountsRepository,
    private readonly accountsTransactionsRepository: AccountsTransactionsRepository
  ) {}

  getAll(): AccountDto[] {
    return this.accountsRepository.findAll();
  }

  getAllTransactions(accountNumber: string): AccountTransactionDto[] {
    return this.accountsTransactionsRepository.findAllByAccountNumber(
      accountNumber
    );
  }
}
