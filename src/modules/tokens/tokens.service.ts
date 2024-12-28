import { Injectable } from '@nestjs/common';
import { CreateAccessTokenDto } from '../../database/repositories/token/dto/create-token.dto';
import { UpdateTokenDto } from '../../database/repositories/token/dto/update-token.dto';

@Injectable()
export class TokensService {
  create(createTokenDto: CreateAccessTokenDto) {
    return 'This action adds a new token';
  }

  findAll() {
    return `This action returns all tokens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
