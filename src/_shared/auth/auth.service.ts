import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private userService: UserService) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const findUser = await this.userService.findOneByUsername(username);
		if (findUser && findUser.password === pass) {
			return findUser;
		}
		return null;
	}
}
