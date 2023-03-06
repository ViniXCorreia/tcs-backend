import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { RepositoryProxyModule } from './infra/database/proxy/repository.proxy.module';
import { PersonController } from './_modules/person/infra/controller/person.controller';
import { PersonModule } from './_modules/person/person.module';
import { AuthModule } from './_shared/auth/auth.module';
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
		DatabaseModule,
		RepositoryProxyModule,
		AuthModule,
		PersonModule,
	],
	controllers: [PersonController],
})
export class AppModule {}
