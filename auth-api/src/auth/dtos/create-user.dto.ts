import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends PickType(UserEntity, [
  'email',
  'password',
  'name',
  'isClient',
  'nickname',
  'userId',
] as const) {
  @ApiProperty({ type: String, description: '사업자 번호', example: '434-343' })
  @IsString()
  @IsOptional()
  managementNumber: string;
}
