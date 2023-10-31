import { Injectable, NestMiddleware, NestModule } from '@nestjs/common';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    console.log('inside the middlewire');
    next();
  }
}
