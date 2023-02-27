import { Inject } from '@nestjs/common';
import { USER_REPOSITORY } from '../../infra/repository/user-repo.interface';
import { LoginDto } from '../../dto/login.dto';
import { ILoginUseCase } from './login.interface';
import { UserEntity } from 'src/infra/database/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/_shared/auth/auth.service';

export class LoginUseCase implements ILoginUseCase {
	constructor(
		@Inject(USER_REPOSITORY)
		private readonly userRepository: Repository<UserEntity>,
		private authService: AuthService
	) {}

	async execute(loginDto: LoginDto): Promise<any> {
		//TODO fazer validação de senha
		return await this.authService.login(loginDto);
	}
}
