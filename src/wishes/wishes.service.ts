import { Injectable } from '@nestjs/common';
import { createWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './models/wish.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WishesService {

  constructor(@InjectModel(Wish.name) private wishModel: Model<Wish>) {}

  async create(createWishDto: createWishDto) {
    return await this.wishModel.create({...createWishDto, id: Date.now().toString()})
  }

  async findByName(name: string, listId: string) {
    return await this.wishModel.find({name: {$regex: name}, listId: listId})
  }

  async findByListId(listId: string) {
    return await this.wishModel.find({listId: listId})
  }

  async findOne(id: string) {
    return await this.wishModel.findOne({id: id});
  }

  async update(id: string, updateWishDto: UpdateWishDto) {
    await this.wishModel.updateOne({id: id}, updateWishDto);
    const data = await this.findOne(id)
    return data
  }

  async remove(id: number) {
    return await this.wishModel.deleteOne({id: id});
  }
}
