import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './domain/customer/customer.module';
import { CustomerService } from './domain/customer/customer.service';
import { CustomerController } from './domain/customer/customer.controller';
import { UsersModule } from './domain/users/users.module';


@Module({
  imports: [PrismaModule, CustomerModule, UsersModule],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
