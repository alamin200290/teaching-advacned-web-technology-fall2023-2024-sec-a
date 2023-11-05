import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
//import { TestMiddlewire } from './middlewire1/TestMiddlewire';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  config  from 'ormconfig';

@Module({
  imports: [AuthModule, UserModule, ProductModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(TestMiddlewire)
    // .forRoutes(AuthController)
  }
}
