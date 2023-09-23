import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FakeDbModule } from '../../db/fake-db.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [FakeDbModule],
})
export class UsersModule {}
