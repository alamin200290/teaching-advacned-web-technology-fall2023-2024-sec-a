import { MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TestMiddleware } from './test/test.middleware';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, UserModule],
  controllers: []
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TestMiddleware).forRoutes(AuthController);
  }
}
