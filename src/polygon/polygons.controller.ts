import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PolygonsService } from '../services/polygon.service';
import { IPolygon } from '../interfaces/polygon.interface';

@Controller('polygons')
export class PolygonsController {
  constructor(private readonly polygonsService: PolygonsService) {}

  @Get()
  getAllPolygons() {
    return this.polygonsService.getAllPolygons();
  }

  @Post()
  createNewPolygon(@Body() body: IPolygon) {
    return this.polygonsService.createNewPolygon(body);
  }

  @Patch()
  updatePolygonById(@Body() body: IPolygon) {
    return this.polygonsService.updatePolygonById(body);
  }

  @Delete(':id')
  deletePolygonById(@Param('id') id: number) {
    return this.polygonsService.deletePolygonById(id);
  }
}
