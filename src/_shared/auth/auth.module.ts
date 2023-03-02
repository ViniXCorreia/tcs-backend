import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PersonModule } from 'src/_modules/person/person.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
	imports: [PersonModule, PassportModule, JwtModule],
	providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
