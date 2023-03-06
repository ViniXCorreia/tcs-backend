import { PersonEntity } from 'src/infra/database/entities/person.entity';

export const FIND_ONE_PERSON_BY_DOCUMENT_NUMBER =
	'IFindOnePersonByDocumentNumberUseCase';

export interface IFindOnePersonByDocumentNumberDTO {
	documentNumber: string;
}

export interface IFindOnePersonByDocumentNumberUseCase {
	execute(
		findOnePersonByDocumentNumberDto: IFindOnePersonByDocumentNumberDTO
	): Promise<PersonEntity>;
}
