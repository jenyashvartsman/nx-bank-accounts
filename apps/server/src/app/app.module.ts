import {
  Logger,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from '../features/users/users.module';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { AccountsModule } from '../features/accounts/accounts.module';

@Module({
  imports: [UsersModule, AccountsModule],
  providers: [Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
