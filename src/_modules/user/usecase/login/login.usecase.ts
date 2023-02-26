import { IUseCase } from 'src/_shared/protocols/IUseCase';
import { Inject } from '@nestjs/common';
import {
	IUserRepoService,
	USER_REPOSITORY,
} from '../../infra/repository/user-repo.interface';
import { LoginDto } from '../../dto/login.dto';
import { ILoginUseCase } from './login.interface';
import { UserEntity } from 'src/infra/database/entities/user.entity';
import { Repository } from 'typeorm';

export class LoginUseCase implements ILoginUseCase {
	constructor(
		@Inject(USER_REPOSITORY)
		private readonly userRepository: Repository<UserEntity>
	) { }

	async execute(loginDto: LoginDto): Promise<any> {
		//TODO fazer validação de senha
		return await this.userRepository.findOne({ where: { username: loginDto.username } });
	}
}
