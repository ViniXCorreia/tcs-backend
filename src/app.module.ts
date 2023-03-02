import { Module } from '@nestjs/common';
import { PersonModule } from './_modules/person/person.module';
import { AuthModule } from './_shared/auth/auth.module';
@Module({
	imports: [AuthModule, PersonModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
