import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/_modules/user/dto/login.dto';
import { ILoginUseCase } from 'src/_modules/user/usecase/login/login.interface';
import { CreatePersonDto } from '../dto/create-person.dto';
import { UpdatePersonDto } from '../dto/update-person.dto';

@Injectable()
export class PersonService {
	constructor(private readonly loginUseCase: ILoginUseCase) {}
	async login(loginDto: LoginDto) {
		return await this.loginUseCase.execute(loginDto);
	}

	create(createPersonDto: CreatePersonDto) {
		return 'This action adds a new person';
	}

	findAll() {
		return `This action returns all person`;
	}

	findOne(id: number) {
		return `This action returns a #${id} person`;
	}

	update(id: number, updatePersonDto: UpdatePersonDto) {
		return `This action updates a #${id} person`;
	}

	remove(id: number) {
		return `This action removes a #${id} person`;
	}
}
