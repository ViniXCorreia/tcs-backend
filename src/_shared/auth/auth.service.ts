import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/_modules/user/dto/login.dto';
import { UserService } from 'src/_modules/user/infra/controller/user.service';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService))
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async validateUser(loginDto: LoginDto): Promise<any> {
		const findUser = await this.userService.findOneUser();
		// if (findUser && findUser.password === pass) {
		// 	return findUser;
		// }
		return null;
	}

	async login(user: any) {
		return this.jwtService.signAsync({ user });
	}
}
