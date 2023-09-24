import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { FakeDbModule } from '../../db/fake-db.module';

@Module({
  providers: [AccountsService],
  controllers: [AccountsController],
  imports: [FakeDbModule],
})
export class AccountsModule {}
