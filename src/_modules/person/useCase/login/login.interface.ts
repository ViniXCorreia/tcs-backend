import { PersonEntity } from 'src/infra/database/entities/person.entity';

export interface ILoginDTO {
	name: string;
	password: string;
}

export interface ILoginUseCase {
	execute(loginDto: ILoginDTO): Promise<PersonEntity>;
}
