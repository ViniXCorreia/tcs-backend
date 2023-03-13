import { MigrationInterface, QueryRunner } from 'typeorm';
import { AddressEntity } from '../entities/address.entity';
import { PersonEntity } from '../entities/person.entity';

export class associeteAdressToFirstPerson1678644841570
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		const personRepo = queryRunner.manager.getRepository(PersonEntity);
		const findPerson = await personRepo.findOneBy({ name: 'First Person' });
		const addressRepo = queryRunner.manager.getRepository(AddressEntity);
		const findAdress = await addressRepo.findOneBy({ zipCode: '11111111' });

		findPerson.adressId = findAdress;

		queryRunner.manager.save(findPerson);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const personRepo = queryRunner.manager.getRepository(PersonEntity);
		const findPerson = await personRepo.findOneBy({ name: 'First Person' });
		findPerson.adressId = null;
		queryRunner.manager.save(findPerson);
	}
}
