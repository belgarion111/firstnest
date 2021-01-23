import { UserController } from './controllers/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    UserController, AppController],
  providers: [AppService],
})
export class AppModule { }
