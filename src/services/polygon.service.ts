import { Injectable } from '@nestjs/common';
import { IPolygon } from '../interfaces/polygon.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Polygon, PolygonDocument } from '../schemas/polygon.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PolygonsService {
  constructor(
    @InjectModel(Polygon.name)
    private polygonModel: Model<PolygonDocument>,
  ) {}

  async createNewPolygon(newPolygon: IPolygon) {
    const newUuid: string = uuidv4();
    const polygon = new this.polygonModel({
      ...newPolygon,
      id: newUuid,
    });
    await this.sleep(5000);
    return polygon.save();
  }

  async getAllPolygons() {
    await this.sleep(5000);
    return this.polygonModel.find().exec();
  }

  async updatePolygonById(body: IPolygon) {
    await this.sleep(5000);
    return this.polygonModel
      .findOneAndUpdate({ id: body.id }, body, { new: true })
      .exec();
  }

  async deletePolygonById(id: number) {
    await this.sleep(5000);
    return this.polygonModel.deleteOne({ id }).exec();
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
