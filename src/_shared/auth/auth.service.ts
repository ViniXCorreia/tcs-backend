import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/_modules/user/infra/controller/user.service';

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const findUser = await this.userService.findOneUser();
		// if (findUser && findUser.password === pass) {
		// 	return findUser;
		// }
		return null;
	}

	async login(user: any) {
		return this.jwtService.sign({ user });
	}
}
