import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.commentModel.create({...createCommentDto, id: Date.now().toString()})
  }

  async findByWishId(wishId: string) {
    return await this.commentModel.find({wishId: wishId})
  }

  async findOne(id: string) {
    return await this.commentModel.findOne({id: id})
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.commentModel.updateOne({id: id}, updateCommentDto)
  }

  async remove(id: string) {
    return await this.commentModel.deleteOne({id: id})
  }
}
