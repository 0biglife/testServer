import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userRepository: UserRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<any> {
    return this.userRepository.find({});
  }

  async createUser(email: string, name: string): Promise<User> {
    return this.userRepository.create({
      userId: uuidv4(),
      email,
      name,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.userRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
