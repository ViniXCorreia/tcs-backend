import { MigrationInterface, QueryRunner } from 'typeorm';
import { PersonEntity } from '../entities/person.entity';

export class insertFirstPerson1678037654843 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.save(
			queryRunner.manager.create<PersonEntity>(PersonEntity, {
				name: 'First Person',
				fantasyName: '',
				password: '123456',
				personType: 'PF',
				email: 'firstperson@mail.com',
				documentNumber: '88888888888',
				telephone: '',
				cellphone: '123123123',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM Person WHERE name = 'First Person'`);
	}
}
