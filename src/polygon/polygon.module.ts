import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PolygonsController } from './polygons.controller';
import { PolygonSchema } from '../schemas/polygon.schema';
import { PolygonsService } from '../services/polygon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Polygon', schema: PolygonSchema }]),
  ],
  controllers: [PolygonsController],
  providers: [PolygonsService],
})
export class PolygonsModule {}
