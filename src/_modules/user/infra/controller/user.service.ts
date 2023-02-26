import { Inject } from '@nestjs/common';
import { LoginDto } from '../../dto/login.dto';
import { ILoginUseCase } from '../../usecase/login/login.interface';


export class UserService {
	constructor(
		private readonly loginUseCase: ILoginUseCase
	) { }
	async login(loginDto: LoginDto) {
		return await this.loginUseCase.execute(loginDto);
	}
	findOneUser() {
		throw new Error('Method not implemented.');
	}
}
