import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
require('dotenv').config({ path: '.env' });

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_SECRET,
		});
	}

	async validate(payload: any) {
		//TODO: VERIFICAR QUAIS DADOS VÃO SER INCLUSOS DENTRO DO JWT
		return {
			id: payload.user.id,
			name: payload.user.name,
			type: payload.user.type,
		};
	}
}
