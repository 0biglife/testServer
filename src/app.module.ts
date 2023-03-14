import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//* MONGODB 연결
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './models/user/user.module';

@Module({
  // imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://0biglife:Rhdeotod1@cluster0.3tr58gx.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
