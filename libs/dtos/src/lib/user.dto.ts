import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'b50732e1-a50b-40b3-b787-e0e6d17a4037' })
  id!: string;

  @ApiProperty({ example: 'John' })
  firstName!: string;

  @ApiProperty({ example: 'Doe' })
  lastName!: string;

  @ApiProperty({ example: 'john-doe@email.com' })
  email!: string;

  @ApiProperty({ example: '476.891.7508' })
  phoneNumber!: string;

  @ApiProperty({ example: '2021-08-03T07:17:05.867Z' })
  createdAt!: Date;
}
