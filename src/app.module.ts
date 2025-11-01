import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PolygonsModule } from './polygon/polygon.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/polygons'),
    PolygonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
