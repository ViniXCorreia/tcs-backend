import { MigrationInterface, QueryRunner } from 'typeorm';
import { CompanyEntity } from '../entities/company.entity';
import { PersonEntity } from '../entities/person.entity';

export class insertFirstCompany1678241252464 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const personRepo = queryRunner.manager.getRepository(PersonEntity);
		const findPerson = await personRepo.findOne({
			where: { name: 'First Person' },
		});
		let insertCompany = new CompanyEntity();
		insertCompany.businessName = 'First Company';
		insertCompany.tradeName = 'First Company Trade Name';
		insertCompany.documentNumber = '123456678000112';
		insertCompany.active = true;
		insertCompany.responsiblePerson = findPerson;
		insertCompany.personId = findPerson;
		await queryRunner.manager.save(insertCompany);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
