import { Logger, Module } from '@nestjs/common';
import { FakeDbService } from './data/fake-db.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersAddressesRepository } from './repositories/users-addresses.repository';
import { AccountsRepository } from './repositories/accounts.repository';
import { AccountsTransactionsRepository } from './repositories/accounts-transactions.repository';

@Module({
  exports: [
    UsersRepository,
    UsersAddressesRepository,
    AccountsRepository,
    AccountsTransactionsRepository,
  ],
  providers: [
    Logger,
    FakeDbService,
    UsersRepository,
    UsersAddressesRepository,
    AccountsRepository,
    AccountsTransactionsRepository,
  ],
})
export class FakeDbModule {}
