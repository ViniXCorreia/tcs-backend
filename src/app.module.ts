import { Module } from '@nestjs/common';
import { UserModule } from './_modules/user/user.module';
import { AuthModule } from './_shared/auth/auth.module';
@Module({
	imports: [AuthModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
