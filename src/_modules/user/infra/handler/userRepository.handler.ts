import { UserFindOneByUserNameRepo } from '../repository/implementation/user-find-one.repo';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';

export class UserRepositoryHander {
	constructor(
		@Inject(UserFindOneByUserNameRepo)
		private readonly userFindOneByUsernameRepo: UserFindOneByUserNameRepo
	) {}

	async userFindOneByUsername(username: string) {
		return await this.userFindOneByUsernameRepo.execute(username);
	}
}
