import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/_modules/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
	imports: [UserModule, PassportModule, JwtModule],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
