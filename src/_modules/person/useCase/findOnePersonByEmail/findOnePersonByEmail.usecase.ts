import { Inject } from '@nestjs/common/decorators';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { UserEntity } from 'src/infra/database/entities/user.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IFindOnePersonByEmailDTO,
	IFindOnePersonByEmailUseCase,
} from './findOnePersonByEmail.interface';

export class FindOnePersonByEmailUseCase
	implements IFindOnePersonByEmailUseCase
{
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>
	) {}

	async execute(
		findOnePersonByEmail: IFindOnePersonByEmailDTO
	): Promise<PersonEntity> {
		return await this.personRepository.findOneBy({
			email: findOnePersonByEmail.email,
		});
	}
}
