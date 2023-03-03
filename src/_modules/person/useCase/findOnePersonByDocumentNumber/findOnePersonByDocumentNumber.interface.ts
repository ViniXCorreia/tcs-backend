import { PersonEntity } from 'src/infra/database/entities/person.entity';

export interface IFindOnePersonByDocumentNumberDTO {
	documentNumber: string;
}

export interface IFindOnePersonByDocumentNumberUseCase {
	execute(
		findOnePersonByDocumentNumberDto: IFindOnePersonByDocumentNumberDTO
	): Promise<PersonEntity>;
}
