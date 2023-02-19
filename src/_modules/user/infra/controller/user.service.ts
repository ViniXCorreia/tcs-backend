import { Inject } from '@nestjs/common';
import { LoginDto } from '../../dto/login.dto';
import {
	IUserUseCases,
	USER_USECASES,
} from '../../useCases/user-usecase.interface';

export class UserService implements IUserUseCases {
	constructor(
		@Inject(USER_USECASES)
		private readonly userUseCases: IUserUseCases
	) {}
	async login(loginDto: LoginDto) {
		return await this.userUseCases.login(loginDto);
	}
	findOneUser() {
		throw new Error('Method not implemented.');
	}
}
