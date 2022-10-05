import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  email: String;

  @Prop({ type: String, required: true })
  passWord: String;

  @Prop({ type: String, required: true })
  firstName: String;

  @Prop({ type: String, required: true })
  lastName: String;

  @Prop({ type: String, required: true })
  roleType: { type: String; enum: ['User', 'Admin']; default: 'Admin' };
}

export const UserSchema = SchemaFactory.createForClass(User);
