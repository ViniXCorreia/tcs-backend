import { Inject } from '@nestjs/common';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { AuthService } from 'src/_shared/auth/auth.service';
import { Repository } from 'typeorm';
import { LoginPersonResponseDto } from '../../infra/dto/login-response.dto';
import { ILoginDTO, ILoginUseCase } from './login.interface';

export class LoginUseCase implements ILoginUseCase {
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>,
		private readonly authService: AuthService
	) {}

	async execute(loginUser: PersonEntity): Promise<LoginPersonResponseDto> {
		const accessToken = await this.authService.login(loginUser);
		return { accessToken };
	}
}
