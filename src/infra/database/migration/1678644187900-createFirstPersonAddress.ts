import { MigrationInterface, QueryRunner } from 'typeorm';
import { AddressEntity } from '../entities/address.entity';

export class createFirstPersonAddress1678644187900
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.manager.save(
			queryRunner.manager.create<AddressEntity>(AddressEntity, {
				zipCode: '11111111',
				number: 123,
				complement: 'casa',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const addressRepo = queryRunner.manager.getRepository(AddressEntity);
		const findAdress = await addressRepo.findOneBy({ zipCode: '11111111' });
		queryRunner.manager.remove(findAdress);
	}
}
