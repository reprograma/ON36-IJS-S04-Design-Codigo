import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [AccountsModule], 
  controllers: [TransactionsController],
  providers: [TransactionsService, AccountsModule]
})
export class TransactionsModule {}
