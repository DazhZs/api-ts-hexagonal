import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

export class UserAplication {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: User): Promise<any> {
    return await this.userRepository.createUser(user);
  }

  async deleteUser(userId: number): Promise<void> {
    return await this.userRepository.deleteUser(userId);
  }
}
