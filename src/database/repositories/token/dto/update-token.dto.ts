import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessTokenDto } from './create-token.dto';

export class UpdateTokenDto extends PartialType(CreateAccessTokenDto) {}
