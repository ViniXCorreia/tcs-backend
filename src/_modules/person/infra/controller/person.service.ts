import { Inject, Injectable } from '@nestjs/common';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import {
	CREATE_PERSON_USE_CASE,
	ICreatePersonUseCase,
} from '../../useCase/createPerson/createperson.interface';
import {
	FIND_ONE_PERSON_BY_DOCUMENT_NUMBER,
	IFindOnePersonByDocumentNumberUseCase,
} from '../../useCase/findOnePersonByDocumentNumber/findOnePersonByDocumentNumber.interface';
import { IFindOnePersonByEmailUseCase } from '../../useCase/findOnePersonByEmail/findOnePersonByEmail.interface';
import {
	ILoginUseCase,
	LOGIN_USECASE,
} from '../../useCase/login/login.interface';
import { CreatePersonDto } from '../dto/create-person.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';

@Injectable()
export class PersonService {
	constructor(
		@Inject(LOGIN_USECASE)
		private readonly loginUseCase: ILoginUseCase,
		@Inject(CREATE_PERSON_USE_CASE)
		private readonly createPersonUseCase: ICreatePersonUseCase,
		// private readonly findOnePersonByEmalUseCase: IFindOnePersonByEmailUseCase,
		@Inject(FIND_ONE_PERSON_BY_DOCUMENT_NUMBER)
		private readonly findOnePersoByDocumentNumber: IFindOnePersonByDocumentNumberUseCase
	) {}
	async login(loginUser: PersonEntity) {
		return await this.loginUseCase.execute(loginUser);
	}

	async create(createPersonDto: CreatePersonDto) {
		return await this.createPersonUseCase.execute(CreatePersonDto);
	}

	async findAll() {
		return await `This action returns all person`;
	}

	async findOne(id: number) {
		return await `This action returns a #${id} person`;
	}

	// async findOnePersonByEmail(email: string) {
	// 	return await this.findOnePersonByEmalUseCase.execute({ email });
	// }

	async findOnePersonByDocumentNumber(documentNumber: string) {
		return await this.findOnePersoByDocumentNumber.execute({ documentNumber });
	}

	async update(id: number, updatePersonDto: UpdatePersonDto) {
		return await `This action updates a #${id} person`;
	}

	async remove(id: number) {
		return await `This action removes a #${id} person`;
	}
}
