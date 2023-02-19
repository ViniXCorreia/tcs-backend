import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { LoginDto } from '../../dto/login.dto';
import { LoginUseCase } from '../../useCases/implementation/login.usecase';

export class UserUseCaseHandler {
	constructor(
		@Inject(LoginUseCase)
		private readonly loginUseCase: LoginUseCase
	) {}

	async login(loginDto: LoginDto) {
		return await this.loginUseCase.execute(loginDto);
	}
}
