import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountFactory } from './factories/account.factory';
import { AccountAdapter } from './adapters/account-adapter';

@Module({
  providers: [AccountsService, AccountFactory, AccountAdapter],
  controllers: [AccountsController],
  exports: [AccountsService],
})
export class AccountsModule {}
