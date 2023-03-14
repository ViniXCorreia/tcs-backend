import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { CreatePersonDto } from '../../infra/dto/create-person.dto';

export const CREATE_PERSON_USE_CASE = 'CreatePersonUseCase';

export interface ICreatePersonDTO {
	createPerson: CreatePersonDto;
}

export interface ICreatePersonUseCase {
	execute(createPersonDto: ICreatePersonDTO): Promise<PersonEntity>;
}
