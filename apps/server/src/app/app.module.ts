import { Logger, Module } from '@nestjs/common';
import { FakeDbService } from './db/fake-db.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FakeDbService, Logger],
})
export class AppModule {}
