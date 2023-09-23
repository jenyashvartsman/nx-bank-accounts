import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from '@nx-bank-accounts/dtos';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { tr } from '@faker-js/faker';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'All users',
    type: UserDto,
    isArray: true,
  })
  getAll(): UserDto[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: 200,
    description: 'Found user',
    type: UserDto,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    required: true,
    type: String,
    example: 'b50732e1-a50b-40b3-b787-e0e6d17a4037',
  })
  getOne(@Param('id') id: string): UserDto {
    const user = this.usersService.getOne(id);

    if (user) {
      return user;
    } else {
      throw new NotFoundException(`Could not find user: ${id}`);
    }
  }
}
