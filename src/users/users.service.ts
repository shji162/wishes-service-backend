import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(userDto: CreateUserDto) {

    return await this.userModel.create({...userDto, id: Date.now().toString()})
  }

  async findAll() {
    return await this.userModel.find({});
  }

  async findOne(id: string) {
    return await this.userModel.findOne({id: id});
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({email: email});
  }

  async update(id: string, updateUserDto: CreateUserDto) {
    return await this.userModel.updateOne({id: id}, updateUserDto);
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({id: id});
  }
}
