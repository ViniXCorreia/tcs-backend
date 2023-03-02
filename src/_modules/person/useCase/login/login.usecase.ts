import { Inject } from '@nestjs/common';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { ILoginDTO, ILoginUseCase } from './login.interface';

export class LoginUseCase implements ILoginUseCase {
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>
	) {}

	async execute(loginDto: ILoginDTO): Promise<PersonEntity> {
		return await this.personRepository.findOneBy({ name: loginDto.name });
	}
}
