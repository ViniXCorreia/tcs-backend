import { PersonEntity } from 'src/infra/database/entities/person.entity';

export interface IFindOnePersonByNameDTO {
	name: string;
}

export interface IFindOnePersonByNameUseCase {
	execute(findOnePersonByName: IFindOnePersonByNameDTO): Promise<PersonEntity>;
}
