import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { AccountsService } from '../accounts/accounts.service';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsService, AccountsService],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
