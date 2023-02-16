import { UserEntity } from 'src/infra/database/entities/user.entity';
import { IUseCase } from 'src/_shared/protocols/IUseCase';

export class FindOneUseCase implements IUseCase<number, UserEntity> {
	execute(data: number): Promise<UserEntity> {
		throw new Error('Method not implemented.');
	}
}
