import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../db/repositories/users.repository';
import { UserDto } from '@nx-bank-accounts/dtos';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getAll(): UserDto[] {
    return this.usersRepository.findAll();
  }

  getOne(id: string): UserDto | null {
    return this.usersRepository.findOne(id);
  }
}
