import { Test, TestingModule } from '@nestjs/testing';
import { TokensController } from '../modules/tokens/tokens.controller';
import { TokensService } from '../modules/tokens/tokens.service';

describe('TokensController', () => {
  let controller: TokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokensController],
      providers: [TokensService],
    }).compile();

    controller = module.get<TokensController>(TokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
