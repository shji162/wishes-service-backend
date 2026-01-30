import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<Wish>;

@Schema()
export class Wish {
  @Prop({required: true, unique: true})
    id: string
  @Prop({required: true})
    listId: string
  @Prop({required: true})
    name: string
  @Prop({required: true})
    description: string
  @Prop({required: true})
    img: string
  @Prop({required: true})
    category: string
  @Prop({required: true})
    likes: number
}

export const wishSchema = SchemaFactory.createForClass(Wish);