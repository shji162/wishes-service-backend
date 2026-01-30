import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from './models/list.model';

@Injectable()
export class ListsService {

  constructor(@InjectModel(List.name) private listsModel: Model<List>) {}

  async create(createListDto: CreateListDto) {
    return await this.listsModel.create({...createListDto, id: Date.now().toString()});
  }

  async findByUserId(userId: string) {
    return await this.listsModel.find({userId: userId});
  }

  async findByName(name: string, userId: string) {
    return await this.listsModel.find({name: {$regex: name}, userId: userId});
  }

  async findOne(id: string) {
    return await this.listsModel.findOne({id: id});
  }

  async changeList(id: string, updateListDto: UpdateListDto){
      await this.listsModel.updateOne({id: id}, updateListDto)
      const data = await this.findOne(id)
      return data
  }

  async remove(id: string) {
    return await this.listsModel.deleteOne({id: id});
  }
}
