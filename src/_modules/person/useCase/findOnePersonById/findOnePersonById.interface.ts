import { PersonEntity } from 'src/infra/database/entities/person.entity';

export interface IFindOnePersonByIdDTO {
	id: number;
}

export interface IFindOnePersonByIdUseCase {
	execute(findOnePersonByIdDto: IFindOnePersonByIdDTO): Promise<PersonEntity>;
}
