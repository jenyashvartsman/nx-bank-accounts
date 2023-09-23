import { ApiProperty } from '@nestjs/swagger';

export class UserAddressDto {
  @ApiProperty({ example: '9d4a46f3-5d77-49a7-a26d-5846a9a2d817' })
  id!: string;

  @ApiProperty({ example: '76f1b2b7-75ec-4ae1-ae4a-31df1b4ba849' })
  userId!: string;

  @ApiProperty({ example: 'South Carolina' })
  state!: string;

  @ApiProperty({ example: 'Port Linwood' })
  city!: string;

  @ApiProperty({ example: '659 Caitlyn Trace' })
  streetAddress!: string;

  @ApiProperty({ example: '71769' })
  zipCode!: string;
}
