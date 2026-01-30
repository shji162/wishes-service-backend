import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<List>;

@Schema()
export class List {
  @Prop({required: true})
    id: string
  @Prop({required: true})
    userId: string
  @Prop({required: true})
    description: string
  @Prop({required: true})
    name: string
}
     
export const listSchema = SchemaFactory.createForClass(List)