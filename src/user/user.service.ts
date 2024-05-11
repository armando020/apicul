import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) 
  private UserRepository: Repository<User>){} 
  
  create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  findAll() {
    return this.UserRepository.find()
  }

  findOne(id: number): Promise<User | null> {
    return this.UserRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.UserRepository.findOne({ where: { id } });
    if (!user) return null;
    
    Object.assign(user, updateUserDto);
    await this.UserRepository.save(user);
    
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.UserRepository.delete(id);
  }
}
