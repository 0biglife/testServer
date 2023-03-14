import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

// @Schema({ timestamps: { createdAt: "createdAt", updatedAt: false } })
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
