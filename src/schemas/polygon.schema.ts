import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PolygonDocument = Polygon & Document;

@Schema()
export class Polygon {
  @Prop({ required: true })
  id: string; // your custom uuid

  @Prop({ required: true })
  name: string;

  @Prop({ type: [[Number]], required: true })
  points: number[][];
}

export const PolygonSchema = SchemaFactory.createForClass(Polygon);
