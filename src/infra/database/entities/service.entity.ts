import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity({ name: 'service' })
export class ServiceEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	totalCost: number;

	@Column()
	duration: number;

	@ManyToOne(() => CompanyEntity, (company) => company.services)
	companyId: CompanyEntity;
}
