import { UserEntity } from 'src/infra/database/entities/user.entity';

export const USER_REPOSITORY = 'user_repository';

export interface IUserRepoService {
	findone(id: number): Promise<UserEntity>;
}
