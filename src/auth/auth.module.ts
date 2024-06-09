import { ConfigService } from '@nestjs/config'; // Import the ConfigService
/* eslint-disable prettier/prettier */
import {  Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import {  PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'; // Import the JwtModule

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({ 
      inject: [ConfigService], 
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])

  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
