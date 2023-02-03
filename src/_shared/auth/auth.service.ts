import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const findUser = await this.userService.findOneByUsername(username);
		if (findUser && findUser.password === pass) {
			return findUser;
		}
		return null;
	}

	async login(user: any) {
		return this.jwtService.sign({ user });
	}
}
