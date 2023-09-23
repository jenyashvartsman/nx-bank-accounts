import { Logger, Module } from '@nestjs/common';
import { FakeDbService } from './data/fake-db.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  exports: [UsersRepository],
  providers: [FakeDbService, UsersRepository, Logger],
})
export class FakeDbModule {}
