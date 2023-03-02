import { Inject } from '@nestjs/common';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import {
	IFindOnePersonByIdDTO,
	IFindOnePersonByIdUseCase,
} from './findOnePersonById.interface';

export class FindOnePersonByIdUsecase implements IFindOnePersonByIdUseCase {
	constructor(
		@Inject(RepositoryProxyModule.PERSON_REPOSITORY)
		private readonly personRepository: Repository<PersonEntity>
	) {}

	async execute(
		findOnePersonByIdDto: IFindOnePersonByIdDTO
	): Promise<PersonEntity> {
		return await this.personRepository.findOneBy({
			id: findOnePersonByIdDto.id,
		});
	}
}
