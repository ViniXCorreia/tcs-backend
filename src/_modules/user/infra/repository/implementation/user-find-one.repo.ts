import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { UserEntity } from 'src/infra/database/entities/user.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';

export class UserFindOneByUserNameRepo {
	constructor(
		@Inject(RepositoryProxyModule.USER_REPOSITORY)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async execute(username: string) {
		// return this.userRepository.findOne({ where: { username: username } });
		return true;
	}
}
