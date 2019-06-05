import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [HttpModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
