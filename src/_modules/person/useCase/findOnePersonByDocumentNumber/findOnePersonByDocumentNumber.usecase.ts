import { Inject } from '@nestjs/common/decorators';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IFindOnePersonByDocumentNumberDTO,
	IFindOnePersonByDocumentNumberUseCase,
} from './findOnePersonByDocumentNumber.interface';

export class FindOnePersonByDocumentNumberUseCase
	implements IFindOnePersonByDocumentNumberUseCase
{
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>
	) {}

	async execute(
		findOnePersonByDocumentNumber: IFindOnePersonByDocumentNumberDTO
	): Promise<PersonEntity> {
		return await this.personRepository.findOneBy({
			documentNumber: findOnePersonByDocumentNumber.documentNumber,
		});
	}
}
