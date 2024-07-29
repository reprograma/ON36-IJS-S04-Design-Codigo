import { Injectable, Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountFactory } from './factories/account.factory';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountFactory],
  exports: [AccountsService],
})
export class AccountsModule {}
