import { PersonEntity } from 'src/infra/database/entities/person.entity';

export interface IFindOnePersonByEmailDTO {
	email: string;
}

export interface IFindOnePersonByEmailUseCase {
	execute(
		findOnePersonByEmail: IFindOnePersonByEmailDTO
	): Promise<PersonEntity>;
}
