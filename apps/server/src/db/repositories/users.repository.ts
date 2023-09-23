import { Injectable } from '@nestjs/common';
import { UserDto } from '@nx-bank-accounts/dtos';
import { FakeDbService } from '../data/fake-db.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly fakeDbService: FakeDbService) {}

  findAll(): UserDto[] {
    return this.fakeDbService.getUsers();
  }

  findOne(id: string): UserDto | null {
    return this.fakeDbService.getUsers().find((user) => user.id === id);
  }
}
