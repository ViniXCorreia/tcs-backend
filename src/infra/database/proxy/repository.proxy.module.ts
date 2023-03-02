import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces';
import { DataSource } from 'typeorm';
import { DatabaseModule } from '../database.module';
import { DB_POSTGRES } from '../database.provider';
import { PersonEntity } from '../entities/person.entity';
import { UserEntity } from '../entities/user.entity';

@Module({
	imports: [DatabaseModule],
})
export class RepositoryProxyModule {
	static PERSON_REPOSITORY = 'PersonRepository';

	static register(): DynamicModule {
		return {
			module: RepositoryProxyModule,
			providers: [
				{
					provide: RepositoryProxyModule.PERSON_REPOSITORY,
					useFactory: (dataSource: DataSource) =>
						dataSource.getRepository(PersonEntity),
					inject: [DB_POSTGRES],
				},
			],
			exports: [RepositoryProxyModule.PERSON_REPOSITORY],
		};
	}
}
