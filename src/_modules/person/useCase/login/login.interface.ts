import { PersonEntity } from 'src/infra/database/entities/person.entity';
import { LoginPersonResponseDto } from '../../infra/dto/login-response.dto';

export const LOGIN_USECASE = 'ILoginUseCase';

export interface ILoginDTO {
	documentNumber: string;
	password: string;
}

export interface ILoginUseCase {
	execute(loginUser: PersonEntity): Promise<LoginPersonResponseDto>;
}
