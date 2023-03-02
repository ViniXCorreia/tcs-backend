import { Module } from '@nestjs/common';
import { PersonService } from './infra/controller/person.service';
import { PersonController } from './infra/controller/person.controller';

@Module({
	controllers: [PersonController],
	providers: [PersonService],
})
export class PersonModule {}
