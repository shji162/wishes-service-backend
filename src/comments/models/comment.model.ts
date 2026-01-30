import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type commentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({required: true, unique: true})
    id: string
  @Prop({required: true})
    wishId: string
  @Prop({required: true})
    text: string
}
     
export const commentSchema = SchemaFactory.createForClass(Comment);