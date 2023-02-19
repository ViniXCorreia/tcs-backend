import { forwardRef, Module } from '@nestjs/common';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { UserController } from './infra/controller/user.controller';
import { UserService } from './infra/controller/user.service';
import { UserRepositoryHander } from './infra/handler/userRepository.handler';
import { UserUseCaseHandler } from './infra/handler/userUseCase.handler';
import { UserFindOneByUserNameRepo } from './infra/repository/implementation/user-find-one.repo';
import { USER_REPOSITORY } from './infra/repository/user-repo.interface';
import { LoginUseCase } from './useCases/implementation/login.usecase';
import { USER_USECASES } from './useCases/user-usecase.interface';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [UserController],
	providers: [
		UserService,
		LoginUseCase,
		UserFindOneByUserNameRepo,
		{ provide: USER_USECASES, useClass: UserUseCaseHandler },
		{ provide: USER_REPOSITORY, useClass: UserRepositoryHander },
	],
	exports: [UserService],
})
export class UserModule {}
