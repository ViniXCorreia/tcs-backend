import { forwardRef, Module } from '@nestjs/common';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { UserController } from './infra/controller/user.controller';
import { UserService } from './infra/controller/user.service';
import { UserRepositoryHander } from './infra/handler/userRepository.handler';
import { LoginUseCase } from './usecase/login/login.usecase';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [UserController],
	providers: [UserService, LoginUseCase],
	exports: [UserService],
})
export class UserModule {}
