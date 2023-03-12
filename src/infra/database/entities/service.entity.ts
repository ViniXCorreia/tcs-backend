import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';
import { ScheduleEntity } from './schedule.entity';

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

	@OneToMany(() => ScheduleEntity, (schedule) => schedule.serviceId)
	schedule: ScheduleEntity;
}
