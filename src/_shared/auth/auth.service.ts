import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { PersonService } from 'src/_modules/person/infra/controller/person.service';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => PersonService))
		private personService: PersonService,
		private jwtService: JwtService
	) {}

	async validateUser(
		documentNumber: string,
		password: string
	): Promise<PersonEntity> {
		const findUser = await this.personService.findOnePersonByDocumentNumber(
			documentNumber
		);
		if (findUser && findUser.password === password) {
			//TODO: COLOCAR A FUNÇÃO DE CRIPTOGRAFIA DAS CREDENCIAIS DO USUÁRIO
			return findUser;
		}
		return null;
	}

	async login(user: any) {
		return await this.jwtService.signAsync({ user });
	}
}
