import { Injectable } from '@nestjs/common';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { IFindOnePersonByDocumentNumberUseCase } from '../../useCase/findOnePersonByDocumentNumber/findOnePersonByDocumentNumber.interface';
import { IFindOnePersonByEmailUseCase } from '../../useCase/findOnePersonByEmail/findOnePersonByEmail.interface';
import { ILoginUseCase } from '../../useCase/login/login.interface';
import { CreatePersonDto } from '../dto/create-person.dto';
import { LoginDTO } from '../dto/login.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';

@Injectable()
export class PersonService {
	constructor(
		private readonly loginUseCase: ILoginUseCase,
		private readonly findOnePersonByEmalUseCase: IFindOnePersonByEmailUseCase,
		private readonly findOnePersoByDocumentNumber: IFindOnePersonByDocumentNumberUseCase
	) {}
	async login(loginUser: PersonEntity) {
		return await this.loginUseCase.execute(loginUser);
	}

	async create(createPersonDto: CreatePersonDto) {
		return await 'This action adds a new person';
	}

	async findAll() {
		return await `This action returns all person`;
	}

	async findOne(id: number) {
		return await `This action returns a #${id} person`;
	}

	async findOnePersonByEmail(email: string) {
		return await this.findOnePersonByEmalUseCase.execute({ email });
	}

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
