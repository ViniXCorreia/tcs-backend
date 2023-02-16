import { LoginDto } from '../../dto/login.dto';
import { LoginUseCase } from '../../useCases/implementation/login.usecase';
import { IUserUseCases } from '../../useCases/user-usecase.interface';

export class UserService implements IUserUseCases {
	constructor(private readonly loginUseCase: LoginUseCase) {}
	async login(loginDto: LoginDto) {
		await this.loginUseCase.execute(loginDto);
	}
	findOneUser() {
		throw new Error('Method not implemented.');
	}
}
