import { Inject } from '@nestjs/common/decorators';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { UserEntity } from 'src/infra/database/entities/user.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IFindOnePersonByNameDTO,
	IFindOnePersonByNameUseCase,
} from './findOnePersonByUsername.interface';

export class FindOnePersonByNameUseCase implements IFindOnePersonByNameUseCase {
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>
	) {}

	async execute(
		findOnePersonByName: IFindOnePersonByNameDTO
	): Promise<PersonEntity> {
		return await this.personRepository.findOneBy({
			name: findOnePersonByName.name,
		});
	}
}
