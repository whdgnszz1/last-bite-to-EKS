import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

export class GettingPointsDto extends PickType(UserEntity, [
  'point',
] as const) {}
