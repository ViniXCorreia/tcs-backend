import { IUseCase } from 'src/_shared/protocols/IUseCase';
import { Inject } from '@nestjs/common';
import {
	IUserRepoService,
	USER_REPOSITORY,
} from '../../infra/repository/user-repo.interface';
import { LoginDto } from '../../dto/login.dto';

export class LoginUseCase implements IUseCase<any, any> {
	constructor(
		@Inject(USER_REPOSITORY)
		private readonly userRepository: IUserRepoService
	) {}

	async execute(loginDto: LoginDto): Promise<any> {
		return await this.userRepository.userFindOneByUsername(loginDto.password);
	}
}
