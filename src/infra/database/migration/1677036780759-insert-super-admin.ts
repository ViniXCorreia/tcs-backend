import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export class insertSuperAdmin1677036780759 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.save(
			queryRunner.manager.create<UserEntity>(UserEntity, {
				name: 'Super Admin',
				username: 'admin',
				password: '12345',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM USER WHERE name = 'Super Admin'`);
	}
}
