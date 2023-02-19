import { UserEntity } from 'src/infra/database/entities/user.entity';

export const USER_REPOSITORY = 'user_repository';

export interface IUserRepoService {
	userFindOneByUsername(username: string): Promise<any>;
}
