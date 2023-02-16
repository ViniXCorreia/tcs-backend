import { LoginDto } from '../dto/login.dto';

export const USER_USECASES = 'user_usecases';

export interface IUserUseCases {
	login(loginDto: LoginDto);
	findOneUser();
}
