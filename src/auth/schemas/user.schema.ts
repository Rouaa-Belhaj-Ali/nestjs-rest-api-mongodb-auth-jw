/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';






@Schema({

    timestamps: true
})

export class User {

    @Prop({ unique: [true , 'Duplicate email entered'] })

    email: string;




    @Prop()
    password: string;



    @Prop() 
    name: string;

    

}

export const UserSchema = SchemaFactory.createForClass(User);