import { forwardRef, Module } from '@nestjs/common';
import { PersonService } from './infra/controller/person.service';
import { PersonController } from './infra/controller/person.controller';
import { LOGIN_USECASE } from './useCase/login/login.interface';
import { LoginUseCase } from './useCase/login/login.usecase';
import { FIND_ONE_PERSON_BY_DOCUMENT_NUMBER } from './useCase/findOnePersonByDocumentNumber/findOnePersonByDocumentNumber.interface';
import { FindOnePersonByDocumentNumberUseCase } from './useCase/findOnePersonByDocumentNumber/findOnePersonByDocumentNumber.usecase';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { AuthModule } from 'src/_shared/auth/auth.module';

@Module({
	imports: [RepositoryProxyModule.register(), forwardRef(() => AuthModule)],
	controllers: [PersonController],
	providers: [
		PersonService,
		{
			provide: LOGIN_USECASE,
			useClass: LoginUseCase,
		},
		{
			provide: FIND_ONE_PERSON_BY_DOCUMENT_NUMBER,
			useClass: FindOnePersonByDocumentNumberUseCase,
		},
	],
	exports: [PersonService],
})
export class PersonModule {}
