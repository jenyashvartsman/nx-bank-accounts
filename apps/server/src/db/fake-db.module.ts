import { Logger, Module } from '@nestjs/common';
import { FakeDbService } from './data/fake-db.service';
import { UsersRepository } from './repositories/users.repository';
import { UsersAddressesRepository } from './repositories/users-addresses.repository';

@Module({
  exports: [UsersRepository, UsersAddressesRepository],
  providers: [Logger, FakeDbService, UsersRepository, UsersAddressesRepository],
})
export class FakeDbModule {}
